const jwt = require('jsonwebtoken')

const validateUser = (req, res, next) => {

    const token = req.cookies.jwt

    if(token){
        jwt.verify(token, process.env.JWT_HASH, async (err, decodedToken) => {
            if(err){

                console.log(err.message);
                return res.json({ status: "failed", message: "invalid token" })

            }
            else{                
                res.json({ status: "ok", message: "validated" })
                next()
            }
        })

    }
    else{
        return res.json({ status: "failed", message: 'no token found' })
    }
    
}

module.exports = { validateUser }