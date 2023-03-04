import imageA from "../../assets/news/A (1).png";
import imageB from "../../assets/news/A (2).png";
import imageC from "../../assets/news/A (3).png";
import imageD from "../../assets/news/A (4).png";
import NewsItem from "./NewsItem";

export default function NewsContainer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
      {news.map((_news) => (
        <NewsItem
          id={_news.id}
          image={_news.image}
          title={_news.title}
          desc={_news.desc}
          content={_news.content}
          dons={_news.dons}
          totalDons={_news.totalDons}
          dateRemaining="15 days"
        />
      ))}
    </div>
  );
}

const news = [
  {
    id: "1",
    image: imageA,
    title: "Online",
    desc: "Home made cheddar",
    content: `Well hello there! As the proud owner of a homemade cheddar business, I can tell you that we take great pride in crafting delicious, high-quality cheddar cheese that's made with love in small batches. Our cheese-making process is a labor of love, involving careful attention to detail and the use of only the finest ingredients.
We start by sourcing the freshest, highest quality raw milk from local farms, ensuring that each batch of cheese has a unique and authentic flavor profile. From there, we use traditional cheese-making techniques to create rich, flavorful cheddar that's aged to perfection.
Our cheese is perfect for anyone who loves the rich, creamy flavor of cheddar, and it's versatile enough to be used in a wide range of dishes. Whether you're looking to add a bit of extra flavor to your favorite sandwich, or you want to create a show-stopping cheese board for your next gathering, our cheddar is the perfect choice.
So if you're looking for delicious, homemade cheddar that's crafted with care and attention to detail, look no further than our small-batch cheese business. We can't wait to share our cheese with you!`,
    dons: 700,
    totalDons: 10000,
  },
  {
    id: "2",

    image: imageB,
    title: "Online",
    desc: "Home made cheddar",

    content: `Well hello there! As the proud owner of a homemade cheddar business, I can tell you that we take great pride in crafting delicious, high-quality cheddar cheese that's made with love in small batches. Our cheese-making process is a labor of love, involving careful attention to detail and the use of only the finest ingredients.
We start by sourcing the freshest, highest quality raw milk from local farms, ensuring that each batch of cheese has a unique and authentic flavor profile. From there, we use traditional cheese-making techniques to create rich, flavorful cheddar that's aged to perfection.
Our cheese is perfect for anyone who loves the rich, creamy flavor of cheddar, and it's versatile enough to be used in a wide range of dishes. Whether you're looking to add a bit of extra flavor to your favorite sandwich, or you want to create a show-stopping cheese board for your next gathering, our cheddar is the perfect choice.
So if you're looking for delicious, homemade cheddar that's crafted with care and attention to detail, look no further than our small-batch cheese business. We can't wait to share our cheese with you!`,
    dons: 8000,
    totalDons: 18000,
  },
  {
    id: "3",

    image: imageB,
    title: "Online",
    desc: "Home made cheddar",

    content: `Well hello there! As the proud owner of a homemade cheddar business, I can tell you that we take great pride in crafting delicious, high-quality cheddar cheese that's made with love in small batches. Our cheese-making process is a labor of love, involving careful attention to detail and the use of only the finest ingredients.
We start by sourcing the freshest, highest quality raw milk from local farms, ensuring that each batch of cheese has a unique and authentic flavor profile. From there, we use traditional cheese-making techniques to create rich, flavorful cheddar that's aged to perfection.
Our cheese is perfect for anyone who loves the rich, creamy flavor of cheddar, and it's versatile enough to be used in a wide range of dishes. Whether you're looking to add a bit of extra flavor to your favorite sandwich, or you want to create a show-stopping cheese board for your next gathering, our cheddar is the perfect choice.
So if you're looking for delicious, homemade cheddar that's crafted with care and attention to detail, look no further than our small-batch cheese business. We can't wait to share our cheese with you!`,
    dons: 75000,
    totalDons: 100000,
  },
  {
    id: "4",

    image: imageC,
    title: "Online",
    desc: "Home made cheddar",

    content: `Well hello there! As the proud owner of a homemade cheddar business, I can tell you that we take great pride in crafting delicious, high-quality cheddar cheese that's made with love in small batches. Our cheese-making process is a labor of love, involving careful attention to detail and the use of only the finest ingredients.
      We start by sourcing the freshest, highest quality raw milk from local farms, ensuring that each batch of cheese has a unique and authentic flavor profile. From there, we use traditional cheese-making techniques to create rich, flavorful cheddar that's aged to perfection.
      Our cheese is perfect for anyone who loves the rich, creamy flavor of cheddar, and it's versatile enough to be used in a wide range of dishes. Whether you're looking to add a bit of extra flavor to your favorite sandwich, or you want to create a show-stopping cheese board for your next gathering, our cheddar is the perfect choice.
      So if you're looking for delicious, homemade cheddar that's crafted with care and attention to detail, look no further than our small-batch cheese business. We can't wait to share our cheese with you!`,
    dons: 7000,
    totalDons: 10000,
  },
  {
    id: "5",

    image: imageC,
    title: "Online",
    desc: "Home made cheddar",

    content: `Well hello there! As the proud owner of a homemade cheddar business, I can tell you that we take great pride in crafting delicious, high-quality cheddar cheese that's made with love in small batches. Our cheese-making process is a labor of love, involving careful attention to detail and the use of only the finest ingredients.
We start by sourcing the freshest, highest quality raw milk from local farms, ensuring that each batch of cheese has a unique and authentic flavor profile. From there, we use traditional cheese-making techniques to create rich, flavorful cheddar that's aged to perfection.
Our cheese is perfect for anyone who loves the rich, creamy flavor of cheddar, and it's versatile enough to be used in a wide range of dishes. Whether you're looking to add a bit of extra flavor to your favorite sandwich, or you want to create a show-stopping cheese board for your next gathering, our cheddar is the perfect choice.
So if you're looking for delicious, homemade cheddar that's crafted with care and attention to detail, look no further than our small-batch cheese business. We can't wait to share our cheese with you!`,
    dons: 7000,
    totalDons: 10000,
  },
  {
    id: "6",

    image: imageD,
    title: "Online",
    desc: "Home made cheddar",

    content: `Well hello there! As the proud owner of a homemade cheddar business, I can tell you that we take great pride in crafting delicious, high-quality cheddar cheese that's made with love in small batches. Our cheese-making process is a labor of love, involving careful attention to detail and the use of only the finest ingredients.
We start by sourcing the freshest, highest quality raw milk from local farms, ensuring that each batch of cheese has a unique and authentic flavor profile. From there, we use traditional cheese-making techniques to create rich, flavorful cheddar that's aged to perfection.
Our cheese is perfect for anyone who loves the rich, creamy flavor of cheddar, and it's versatile enough to be used in a wide range of dishes. Whether you're looking to add a bit of extra flavor to your favorite sandwich, or you want to create a show-stopping cheese board for your next gathering, our cheddar is the perfect choice.
So if you're looking for delicious, homemade cheddar that's crafted with care and attention to detail, look no further than our small-batch cheese business. We can't wait to share our cheese with you!`,
    dons: 7000,
    totalDons: 10000,
  },
  {
    id: "7",

    image: imageA,
    title: "Online",
    desc: "Home made cheddar",

    content: `Well hello there! As the proud owner of a homemade cheddar business, I can tell you that we take great pride in crafting delicious, high-quality cheddar cheese that's made with love in small batches. Our cheese-making process is a labor of love, involving careful attention to detail and the use of only the finest ingredients.
We start by sourcing the freshest, highest quality raw milk from local farms, ensuring that each batch of cheese has a unique and authentic flavor profile. From there, we use traditional cheese-making techniques to create rich, flavorful cheddar that's aged to perfection.
Our cheese is perfect for anyone who loves the rich, creamy flavor of cheddar, and it's versatile enough to be used in a wide range of dishes. Whether you're looking to add a bit of extra flavor to your favorite sandwich, or you want to create a show-stopping cheese board for your next gathering, our cheddar is the perfect choice.
So if you're looking for delicious, homemade cheddar that's crafted with care and attention to detail, look no further than our small-batch cheese business. We can't wait to share our cheese with you!`,
    dons: 7000,
    totalDons: 10000,
  },
  {
    id: "8",

    image: imageB,
    title: "Online",
    desc: "Home made cheddar",

    content: `Well hello there! As the proud owner of a homemade cheddar business, I can tell you that we take great pride in crafting delicious, high-quality cheddar cheese that's made with love in small batches. Our cheese-making process is a labor of love, involving careful attention to detail and the use of only the finest ingredients.
We start by sourcing the freshest, highest quality raw milk from local farms, ensuring that each batch of cheese has a unique and authentic flavor profile. From there, we use traditional cheese-making techniques to create rich, flavorful cheddar that's aged to perfection.
Our cheese is perfect for anyone who loves the rich, creamy flavor of cheddar, and it's versatile enough to be used in a wide range of dishes. Whether you're looking to add a bit of extra flavor to your favorite sandwich, or you want to create a show-stopping cheese board for your next gathering, our cheddar is the perfect choice.
So if you're looking for delicious, homemade cheddar that's crafted with care and attention to detail, look no further than our small-batch cheese business. We can't wait to share our cheese with you!`,
    dons: 7000,
    totalDons: 10000,
  },
  {
    id: "9",

    image: imageD,
    title: "Online",
    desc: "Home made cheddar",

    content: `Well hello there! As the proud owner of a homemade cheddar business, I can tell you that we take great pride in crafting delicious, high-quality cheddar cheese that's made with love in small batches. Our cheese-making process is a labor of love, involving careful attention to detail and the use of only the finest ingredients.
We start by sourcing the freshest, highest quality raw milk from local farms, ensuring that each batch of cheese has a unique and authentic flavor profile. From there, we use traditional cheese-making techniques to create rich, flavorful cheddar that's aged to perfection.
Our cheese is perfect for anyone who loves the rich, creamy flavor of cheddar, and it's versatile enough to be used in a wide range of dishes. Whether you're looking to add a bit of extra flavor to your favorite sandwich, or you want to create a show-stopping cheese board for your next gathering, our cheddar is the perfect choice.
So if you're looking for delicious, homemade cheddar that's crafted with care and attention to detail, look no further than our small-batch cheese business. We can't wait to share our cheese with you!`,
    dons: 7000,
    totalDons: 10000,
  },
  {
    id: "10",

    image: imageC,
    title: "Online",
    desc: "Home made cheddar",

    content: `Well hello there! As the proud owner of a homemade cheddar business, I can tell you that we take great pride in crafting delicious, high-quality cheddar cheese that's made with love in small batches. Our cheese-making process is a labor of love, involving careful attention to detail and the use of only the finest ingredients.
We start by sourcing the freshest, highest quality raw milk from local farms, ensuring that each batch of cheese has a unique and authentic flavor profile. From there, we use traditional cheese-making techniques to create rich, flavorful cheddar that's aged to perfection.
Our cheese is perfect for anyone who loves the rich, creamy flavor of cheddar, and it's versatile enough to be used in a wide range of dishes. Whether you're looking to add a bit of extra flavor to your favorite sandwich, or you want to create a show-stopping cheese board for your next gathering, our cheddar is the perfect choice.
So if you're looking for delicious, homemade cheddar that's crafted with care and attention to detail, look no further than our small-batch cheese business. We can't wait to share our cheese with you!`,
    dons: 7000,
    totalDons: 10000,
  },
];
