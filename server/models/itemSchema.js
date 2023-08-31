const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({

    imageUrl: {
        type: String
    },
    name: {
        type: String
    },
    gender: {
        type: String
    },
    price: {
        type: Number
    },
    type: {
        type: String
    }

});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item