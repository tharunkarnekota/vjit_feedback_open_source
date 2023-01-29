const mongoose = require('mongoose')

const demo = new mongoose.Schema({
    
    username : String,
    password : String
})

module.exports = mongoose.model('demo',demo)