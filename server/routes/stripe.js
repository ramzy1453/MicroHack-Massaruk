const express = require('express')
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const {isAuth} = require('../middleware')

const router = express.Router()

router.post("/api/create-checkout-session",isAuth, async (req, res) => { 
    const { product } = req.body; 
    const session = await stripe.checkout.sessions.create({ 
    payment_method_types: ["card"], 
    line_items: [ 
        { 
        price_data: { 
            currency: "inr", 
            product_data: { 
            name: product.title, 
            }, 
            unit_amount: product.price * 100, 
        }, 
        quantity:1
        }, 
    ], 
    mode: "payment", 
    success_url: "http://127.0.0.1:5173/success", 
    cancel_url: "http://127.0.0.1:5173/cancel", 
    }); 
    res.json({ id: session.id }); 
}); 

module.exports = router

