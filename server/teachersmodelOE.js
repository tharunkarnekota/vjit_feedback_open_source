const mongoose = require('mongoose')

const teachersOE = new mongoose.Schema({
    
    teacherName:String,
    teacherDepartment:String,
    classes:String,

    teachermob:String,
    teacheremail:String,
    
})

module.exports = mongoose.model('teachers OE',teachersOE)