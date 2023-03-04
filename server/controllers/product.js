const Product = require('../models/Product')

const createProduct = async (req,res) => {
    try {
        const {title, description, price, fieldType, benifits, restDay} = req.body
        if(!title || !description || !price || !fieldType || !benifits || !restDay){
            return res.status(400).json({message:"Err...Miss informations !"})
        }
        const newProduct = new Product({
            ...req.body,owner:req.user.userId
        })
        await newProduct.save()
        res.status(201).json(newProduct)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const getAllProducts = async (req,res) => {
    try {
        const allProducts = await Product.find({}).populate({
            path: 'owner invests',
            select:
                'name email investisteur entrepreneur ',
            })
        res.status(200).json(allProducts)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const getSingleProduct = async (req,res) => {
    try {
        const {id} = req.params
        const getProduct = await Product.findById(id)
        res.status(200).json(getProduct)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const searchProduct = async (req,res) => {
    try {
        const {title} = req.query
        const result = new RegExp(title,"i")
        const products = await Product.find({title:result})
        res.status(200).json(products)
    } catch (error) {
        res.status(404).json(error.message)
    }
}


const updateProduct = async (req,res) => {
    try {
        const {id} = req.params
        const getProductAndUpdate = await Product.findByIdAndUpdate(id,{...req.body},{new:true})
        res.status(200).json(getProductAndUpdate)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

const deleteProduct = async (req,res) => {
    try {
        const {id} = req.params
        const getProductAndDelete = await Product.findByIdAndDelete(id)
        res.status(200).json(getProductAndDelete)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

module.exports = {createProduct, getAllProducts, getSingleProduct, searchProduct, updateProduct, deleteProduct}
