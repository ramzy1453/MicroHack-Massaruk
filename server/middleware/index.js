const jwt = require('jsonwebtoken')
const User = require('../models/User')

const isAuth = async (req,res,next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        if(!token){
            return res.status(404).json({error:error.message})
        }
        const payload = jwt.verify(token,process.env.JWT_SECRET)
        const isExist = await User.findById(payload.userId)
        if(!isExist){
            return res.status(404).json({message:"This User Does not exist !"})
        }
        req.user = payload
        next()
    } catch (error) {
        return res.status(404).json(error.message)
    }
}

const isAdmin = async (req,res,next) => {
    try {
        isAuth(req,res,()=>{
            if(req.user.rol !=="admin"){
                return res.status(401).json({message:"UnAuthorized..."})
            }else{
                next()
            }
        })
    } catch (error) {
        
    }
}

module.exports = {isAuth, isAdmin}