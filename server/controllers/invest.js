const Invest = require('../models/Invest')
const Product = require('../models/Product')
const createInvest = async (req,res) => {
    try {
        const {investisteur, entrepreneur, productId, price} = req.body
        if(!investisteur || !entrepreneur || !price || !productId){
            return res.status(400).json({message:"Err...Miss informations !"})
        }
        const newInvest = new Invest({
            ...req.body
        })
        await newInvest.save()
        const product = await Product.findById(productId)
        await product.updateOne({$push : {invests:newInvest}})
        res.status(201).json(newInvest)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const getAllInvests = async (req,res) => {
    try {
        const allInvests = await Invest.find({})
        res.status(200).json(allInvests)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const getSingleInvest = async (req,res) => {
    try {
        const {id} = req.params
        const getInvest = await Invest.findById(id)
        res.status(200).json(getInvest)
    } catch (error) {
        res.status(404).json(error.message)
    }
}


const updateInvest = async (req,res) => {
    try {
        const {id} = req.params
        const getInvestAndUpdate = await Invest.findByIdAndUpdate(id,{...req.body},{new:true})
        res.status(200).json(getInvestAndUpdate)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const deleteInvest = async (req,res) => {
    try {
        const {id} = req.params
        const getInvestAndDelete = await Invest.findByIdAndDelete(id)
        res.status(200).json(getInvestAndDelete)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

module.exports = {createInvest, getAllInvests, getSingleInvest, updateInvest, deleteInvest}