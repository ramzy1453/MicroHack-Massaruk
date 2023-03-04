
from flask import Flask,request,jsonify
import pandas as pd
import numpy as np
import pandas as pd
import difflib

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# CREATE FLASK APP
app = Flask(__name__)


# CONNECT POST API CALL ---> predict() Function  #http://localhost:5000/predict
@app.route('/predict',methods=['POST'])
def predict():
    prediction=[]
    # GET JSON REQUEST
    feat_data = request.json
    # CONVERT JSON to PANDAS DF (col names)
    
    selected_features = ['Category','keyword','price','stars','votes']
    print(selected_features)
    # replacing the null valuess with null string

    for feature in selected_features:
        movies_data[feature] = movies_data[feature].fillna('')
    # combining all the 5 selected features

    combined_features = movies_data['Category']+' '+movies_data['keyword']+' '+movies_data['price']+' '+movies_data['stars']+' '+movies_data['votes']
    # converting the text data to feature vectors

    vectorizer = TfidfVectorizer()

    feature_vectors = vectorizer.fit_transform(combined_features)

    # getting the similarity scores using cosine similarity

    similarity = cosine_similarity(feature_vectors)

    movie_name = feat_data["text"]
    list_of_all_titles = movies_data['title'].tolist()

    find_close_match = difflib.get_close_matches(movie_name, list_of_all_titles)

    close_match = find_close_match[0]

    index_of_the_movie = movies_data[movies_data.title ==
                                    close_match]['index'].values[0]

    similarity_score = list(enumerate(similarity[index_of_the_movie]))

    sorted_similar_movies = sorted(
        similarity_score, key=lambda x: x[1], reverse=True)

    

    i = 1

    for movie in sorted_similar_movies:
        index = movie[0]
        title_from_index = movies_data[movies_data.index == index]['title'].values[0]
        if (i < 30):
            prediction.append(title_from_index)
            i += 1

    
    
    return jsonify({'prediction':str(prediction)})

movies_data = pd.read_csv('df.csv')
# LOAD MY MODEL and LOAD COLUMN NAMES
if __name__ == '__main__':
    
    
    # loading the data from the csv file to apandas dataframe
    
    # selecting the relevant features for recommendation

    
    
    app.run(debug=True)