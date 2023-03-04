const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    owner:{type:mongoose.Schema.Types.ObjectId,required:true, ref:'User'},
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    fieldType:{
        type:String,
        required:true
    },
    benifits:{
        type:String,
        required:true
    },
    productPhoto:String,
    price:{
        type:Number,
        required:true
    },
    restDay:{
        type:Number,
        required:true
    },
    tags:[""],
    invests:[{type:mongoose.Schema.Types.ObjectId,required:true, ref:'Invest'}]
})

module.exports = mongoose.model('Product',ProductSchema)