const User = require('../models/User')

const getAllUsers = async (req,res) => {
    try {
        const allUsers = await User.find({})
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const getSingleUser = async (req,res) => {
    try {
        const {id} = req.params
        const getUser = await User.findById(id)
        res.status(200).json(getUser)
    } catch (error) {
        res.status(404).json(error.message)
    }
}


const updateUser = async (req,res) => {
    try {
        const {id} = req.params
        const getUserAndUpdate = await User.findByIdAndUpdate(id,{...req.body},{new:true})
        res.status(200).json(getUserAndUpdate)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const deleteUser = async (req,res) => {
    try {
        const {id} = req.params
        const getUserAndDelete = await User.findByIdAndDelete(id)
        res.status(200).json(getUserAndDelete)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

module.exports = {getAllUsers, getSingleUser, updateUser, deleteUser}
