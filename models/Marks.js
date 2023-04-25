
const mongoose = require('mongoose');

const MarkSchema = new mongoose.Schema({
   student_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student"
   },
   
    subject: {
        english: {
            type: Number,
            require:true
        },
        maths: {
            type: Number,
            require:true
        },
        science : {
            type: Number,
            require:true
        },
        social: {
            type: Number,
            require:true
        },
        computer : {
            type: Number,
            require:true
        }
    },
    name_of_test: {
        type: String,
        enum: ['Unit I', 'Term I', 'Unit II', 'Term II']
    }

}, {timestamps:true})

module.exports = mongoose.model('Mark', MarkSchema)