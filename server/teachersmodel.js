const mongoose = require('mongoose')

const teachers = new mongoose.Schema({
    
    teacherName:String,
    teacherDepartment:String,
    classsection:String,
    subject:String,
    teachermob:String,
    teacheremail:String,
    
})

module.exports = mongoose.model('teachers',teachers)