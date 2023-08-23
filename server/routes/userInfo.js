const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/userSchema')

const userInfoRouter = express.Router()

userInfoRouter.get('/getaddress', async (req, res) => {

    const token = req.cookies.jwt
    if(token){
        const decodedToken = await jwt.verify(token, process.env.JWT_HASH)
        const user = await User.findOne({ _id: decodedToken.id }).lean()
        if(user){
            return res.send({ status: "ok", shippingAddress: user.address })
        }

        res.json({ status: "ok", message: "JWT found" })
    }
    else{
        res.json({ status: "failed", message: "JWT not found" })
    }

})

userInfoRouter.get('/getallinfo', async (req, res) => {

    const token = req.cookies.jwt

    if(token){
        try{
            const decodedToken = await jwt.verify(token, process.env.JWT_HASH)
            console.log(decodedToken)
            const user = await User.findOne({ _id: decodedToken.id })
            res.json({ status: "ok", user: user })
        }
        catch(err){
            console.log(err)
            res.json({ status: "failed", message: "fail" })
        }

    }

})

userInfoRouter.post("/updateaddress" ,async (req, res) => {

    const token = req.cookies.jwt

    if(token){
        const decodedToken = jwt.verify(token, process.env.JWT_HASH)

        const { firstName, lastName, phoneNumber, newAddress } = req.body

        const user = await User.findByIdAndUpdate({ _id: decodedToken.id }, {firstName: firstName, lastName: lastName, phoneNumber: phoneNumber, address: newAddress})
        res.json({ status: "ok", message: "Update succeeded :)" })
    }
    else{
        res.json({ status: "failed", message: "You are not signed in" })
    }

})

userInfoRouter.post("/resetpassword", async (req, res) => {

    const token = req.cookies.jwt
    const { oldPassword, newPassword, verifyNewPassword } = req.body
    
    if(token){

        const decodedToken = await jwt.verify(token, process.env.JWT_HASH)
        const user = await User.findOne({ _id: decodedToken.id })

        if(await bcrypt.compare(oldPassword, user.password)){

            if(newPassword === verifyNewPassword){
                
                const salt = await bcrypt.genSalt()
                const newPasswordWithSalt = await bcrypt.hash(newPassword, salt)
                await User.findByIdAndUpdate(decodedToken.id, {password: newPasswordWithSalt})

                return res.json({ status: "ok", message: "password reseted" })

            }
            else{
                return res.json({ status: "failed", message: "The password is not the same as the re-entered password" })
            }

        }
        else{
            return res.json({ status: "failed", message: "The password is wrong" })
        }

    }


    


})

module.exports = userInfoRouter