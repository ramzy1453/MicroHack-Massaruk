const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    profilePicture:{
        type:String,
        default:"",
    },
    fieldWork:{
        type:String,
        default:""
    },
    bio:{
        type:String,
    },
    role:{
        type:String,
        enum:["admin","entrepreneur","investisteur"],
        default:"investisteur"
    },
    phone:{
        type:String,
        default:""
    },
})

module.exports = mongoose.model("User",UserSchema)