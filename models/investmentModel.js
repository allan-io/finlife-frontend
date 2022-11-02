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
    action: {
        type:String,
        required: true
    },
    ticker: {
        type: String,
        required: true
    },
    broker: {
        type: String,
        required: true
    },
    stockPrice: {
        type: Number,
        required: true
    },
    transactionTotal: {
        type: Number,
        required: true
    },
    sharesPurchased: {
        type: Number,
        required: true,
        default: function() {
            return (Math.round((this.transactionTotal / this.stockPrice) * 1e6) / 1e6)
        }
    },
    fraction: {
        type: Number,
        default: 1
    },
    isNegative: {
        type: Boolean,
        required: true,
        default: false
    },
    dividents: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

module.exports = mongoose.model('Investment', investmentSchema)
