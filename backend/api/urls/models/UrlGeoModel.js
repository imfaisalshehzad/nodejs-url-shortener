const mongoose = require('mongoose')

const URLGeoSchema = new mongoose.Schema({
    urlCode: String,
    ip_address: String,
    country: String,
    region: String,
    timezone: String,
    date: {
        type: String,
        default: Date.now
    },
}, {timestamps: true})

module.exports = mongoose.model('URLGeo', URLGeoSchema)
