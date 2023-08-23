const jwt = require('jsonwebtoken')

const handleErrors = async (err) => {

    const errorCodeForEmailIsNotUnique = 11000

    if(err.code === errorCodeForEmailIsNotUnique){
        return "email is not unique" 
    }

    const errorsList = await Object.values(err.errors)
    return errorsList[0].message

}

const createToken = async (id) => {

    return await jwt.sign({ id }, process.env.JWT_HASH, { expiresIn: '24h' })

}

module.exports = {
    handleErrors,
    createToken
}