const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/userSchema')
const { handleErrors, createToken } = require('../helpers/userAuthHelpers') 
const { validateUser } = require("../middleware/userAuthMiddleware")
const router = express.Router()

router.post('/signup', async (req, res) => {

    const { firstName, lastName, email, password, verifyPassword } = req.body

    if(verifyPassword === password){
        try{
            const user = await User.create({ firstName, lastName, email, password })
            const maxAge = 60_000 * 60 * 24 // Seconds - Minutes - Hours = day + this needs to be changed!! (code duplication in userAuthHelper.js)
            const token  = await createToken(user._id)
            await res.cookie('jwt', `${token}`, { httpOnly: true, maxAge: maxAge })
            res.json({ status: "ok", userId: user._id })
        }
        catch(err){
            res.json({ status: "failed", message: await handleErrors(err) })
        }
    }
    else{
        if(!verifyPassword){
            res.json({ status: "failed", message: "re-enter the password" })
        }
        else{
            res.json({ status: "failed", message: "re-entered password is not equal to the password" })
        }
    }

})

router.post('/login', async (req, res) => {
	
    const { email, password } = req.body
	const user = await User.findOne({ email }).lean() 
    const maxAge = 60_000 * 60 * 24 // Seconds - Minutes - Hours = day + this needs to be changed!! (code duplication in userAuthHelper.js)
    
	if (!user) {
		return res.json({ status: "failed", message: "invalid email" })
	}

	if (await bcrypt.compare(password, user.password)) {
	    const token = await createToken(user._id)
        await res.cookie('jwt', `${token}`, { httpOnly: true, maxAge: maxAge })
	    return res.json({ status: "ok", userId: user._id })
	}

	res.json({ status: "failed", message: "wrong password" })

})

router.get("/logout", (req, res) => {

    console.log("in logout")

    res.cookie('jwt', '', { maxAge: 1 })
    res.json({ status: "ok", message: "Logout Completed" })
    
})

router.get("/is-signed-in", async (req, res) => {

    const token = req.cookies.jwt

    if(token){
        try{
            jwt.verify(token, process.env.JWT_HASH)
            return res.json({ status: "ok", message: "user is signed in" })
        }
        catch(err){
            return res.json({ status: "failed", message: "user is not signed in" })
        }
    }
    else{
        return res.json({ status: "failed", message: "user is not signed in" })
    }

})

module.exports = router