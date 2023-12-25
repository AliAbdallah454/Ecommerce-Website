const express = require('express')
const itemSchema = require('../models/itemSchema')
const jwt = require('jsonwebtoken')
const User = require('../models/userSchema')
const Item = require('../models/itemSchema')
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const { validateUser } = require('../middleware/userAuthMiddleware')

const router = express.Router()
exports.router = router

router.get("/get-womens-items", async (req, res) => {
    const items = await itemSchema.find({})
    res.json(items)
})

router.post("/add-item", async (req, res) => {

    const token = req.cookies.jwt

    if(token){
        try{
            const decodedToken = await jwt.verify(token, process.env.JWT_HASH)
            await User.findByIdAndUpdate({ _id: decodedToken.id }, { $push: { shoppingCartItems: req.body.itemId } })
            res.json({ status: "ok", message: "item Added" })
        }
        catch(err){
            res.json({ status: "failed", message: "fail" })
        }

    }

})

router.get("/get-items-in-shopping-cart", async (req, res) => {

    const token = req.cookies.jwt

    if(token){
        try{
            const decodedToken = await jwt.verify(token, process.env.JWT_HASH)
            const user = await User.findById({ _id: decodedToken.id })

            let items = await Promise.all(user.shoppingCartItems.map(async (item) => await Item.findById({ _id: item })))

            res.json({ status: "ok", items: items }) 
        }
        catch(err){
            res.json({ status: "failed", message: "fail" })
        }

    }   
    else{
        res.json({ status: "failed", message: "fail" })
    }
    
})

router.post("/remove-item", async (req, res) => {

    const token = req.cookies.jwt

    if(token){
        
        try{
            const decodedToken = await jwt.verify(token, process.env.JWT_HASH)
            const user = await User.findById({ _id: decodedToken.id })
            const itemIdToBeRemoved = req.body.id
            const items = user.shoppingCartItems

            items.forEach(item => console.log(item === itemIdToBeRemoved))
            await User.findByIdAndUpdate({ _id: decodedToken.id }, { shoppingCartItems: items.filter(item => item !== itemIdToBeRemoved) })

            res.json({ status: "ok", message: "it woked" })
        }
        catch(err){
            res.json({ status: "err", message: "" })
        }

    }
    else{
        res.json({ status: "err", message: "" })
    }

})

router.get("/checkout",async (req, res) => {

    const token = req.cookies.jwt

    if(token){

        const decodedToken = await jwt.verify(token, process.env.JWT_HASH)
        const user = await User.findById({ _id: decodedToken.id })

        const itemsIds = user.shoppingCartItems

        try{
            console.log('in try')
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                mode: 'payment',
                line_items: await Promise.all(itemsIds.map(async (itemId) => {

                    const item = await Item.findById({ _id: itemId })

                    return {
                        price_data: {
                            currency: 'usd',
                            product_data: {
                                name: item.name
                            },
                            unit_amount: item.price * 100
                        },
                        quantity: 1
                    }
                })),
                success_url: 'http://localhost:5000/',
                cancel_url: `${process.env.SERVER_URL}/success.html`
            }) 
    
            res.json({ url: session.url })
    
        }
        catch(err){
            res.json({ err })
        }

    }

})

module.exports = router