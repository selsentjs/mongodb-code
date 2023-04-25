
const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
    student_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    },
   teacher_name: {
    type: String,
    required: true,
    trim: true

   },
   subject: {
    type: String,
    enum: ['Maths', 'Science', 'Computer'],
    default: 'Computer'
   },
   teacher_contact: {
    type: Number
   },
   handle_class: {
    type: String
   }

}, {timestamps:true})

module.exports = mongoose.model('Teacher', TeacherSchema)