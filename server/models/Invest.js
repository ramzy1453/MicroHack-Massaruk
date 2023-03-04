const mongoose = require('mongoose')

const InvestSchema = mongoose.Schema({
    investisteur:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    entrepreneur:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    productId:String,
    price:{
        type:Number,
        required:true
    },
})

module.exports = mongoose.model('Invest',InvestSchema)