const mongoose = require('mongoose')

const feedbackmodel = new mongoose.Schema({
    
    teacherrefid : String,
    teacherName:String,
    teacherDepartment:String,
    teachermob:String,
    teacheremail:String,

    studentrefid:String,
    studentclgId:String,
    studentName:String,
    studentclass:String,

    subjectKnowledge : String,
    communication : String,
    presentationSkills : String,
    punctuality : String,
    controlOverTheClass : String,
    audibility : String,
    professionalism : String,
    contentOfLecture : String,
    clarificationOfDoubts : String,
    explanationWithExamples : String,
    subject:String,

    comment : String,

    oe : String
   

})

module.exports = mongoose.model('feedbacks',feedbackmodel)