const env = require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const userAuthRouter = require('./routes/userAuth')
const userInfoRouter = require('./routes/userInfo')
const itemsRouter = require('./routes/items')

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
    credentials: true
}));

app.use('/users', userAuthRouter)
app.use('/userinfo', userInfoRouter)
app.use('/items', itemsRouter)

const MONGODB_URI = `mongodb+srv://alikhaledabdallah454:${process.env.MONGO_PASSWORD}@cluster0.0tosuve.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to Mongo DB") 
    app.listen(process.env.PORT, () => {
        console.log(`server is running on http://localhost:${process.env.PORT}`)
    })
})
.catch(error => console.error('Error connecting to MongoDB:', error));