
const Student = require('../models/Student');

// get all the students
const getAllStudents = async(req,res) => {
    try {
        const student = await Student.find({})
        res.status(200).json({student, count: student.length})
    }
    catch(err) {
        res.status(500).json(err)
    }
}

// get single student
const getSingleStudent = async(req,res) => {
    const {id} = req.params;
    try {
        const student = await Student.findOne({_id:id})
        res.status(200).json({student})
    }
    catch(err) {
        res.status(500).json(err)
    }
}

// create student
const createStudent = async(req,res) => {
    try {

        const student = await Student.create(req.body);
        res.status(200).json({student})
    }
    catch(err) {
        res.status(500).json(err)
    }
}

// update student
const updateStudent = async(req,res) => {
    const {id} = req.params;
    try {
        const student = await Student.findOneAndUpdate({_id:id}, req.body)
        res.status(200).json({student, msg:'update student successfully'})
    }
    catch(err) {
        res.status(500).json(err)
    }
}

// delete student
const deleteStudent = async(req,res) => {
    try {
        res.status(200).json({msg:'delete student'})
    }
    catch(err) {
        res.status(500).json(err)
    }
}



module.exports = {
    getAllStudents,
    getSingleStudent,
    createStudent,
    updateStudent,
    deleteStudent,
   
}
