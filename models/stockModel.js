// const mongoose = require('mongoose')

// const Schema = mongoose.Schema

// const stockSchema = new Schema({

//     name: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     type: {
//         type: String,
//         required: true
//     },
//     action: {
//         type:String,
//         required: true
//     },
//     ticker: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     broker: {
//         type: String,
//         required: true
//     },
//     stockPrice: {
//         type: Number,
//         required: true
//     },
//     cashCost: {
//         type: Number,
//         required: true
//     },
//     sharesPurchased: {
//         type: Number,
//         required: true,
//         default: function() {
//             return (Math.round((cashCost / stockPrice) * 1e6) / 1e6)
//         }
//     }

// }, {timestamps: true})
