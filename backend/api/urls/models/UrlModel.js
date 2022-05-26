const mongoose = require('mongoose')

const URLSchema = new mongoose.Schema({
    urlCode: String,
    longUrl: String,
    shortUrl: String,
    date: {
        type: String,
        default: Date.now
    },
    clicks: {
        type: Number,
        default: 0,
    }
}, {timestamps: true})

module.exports = mongoose.model('Url', URLSchema)
