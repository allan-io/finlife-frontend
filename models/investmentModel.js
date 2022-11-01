const mongoose = require('mongoose')

const Schema = mongoose.Schema

const investmentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    purchasePrice: {
        type: Number,
        required: true
    },
    // quantity: {
    //     type: Number,
    //     required: true,
    // },
    // totalValue: {
    //     type: Number,
    //     default: function() {
    //         return Math.ceil((this.purchasePrice * this.quantity) * 100) / 100
    //     }
    // },
    broker: {
        type: String,
        required: true
    },
    defaultValue: {
        type: String,
        required: true
    },
    ticker: {
        type: String,
        required: true
    },
    purchaseValue: {
        type: Number,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Investment', investmentSchema)
