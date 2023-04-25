
const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  
    student_name: {
        type: String,
        required:true,
    },
    date_of_birth: {
        type: Date,
        required:true

    },
    std:{
        type: String
    },
    sec: {
        type: String
    },
    stream: {
        type: String,
        enum: ['State', 'CBSE', 'ICSE'],
        default: 'State',
    },
    address: {
        street:{
            type: String
        },
        city: {
            type: String
        }
    },
    parent: {
        father: {
            type: String
        },
        mother: {
            type: String
        }
    },
    student_contact: {
        type: Number
    }

}, {timestamps:true})

module.exports = mongoose.model('Student', StudentSchema)