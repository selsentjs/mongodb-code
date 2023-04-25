
const Teacher = require('../models/Teacher');

// get all the Teachers
const getAllTeachers = async(req,res) => {
    try {
        const teacher = await Teacher.findOne().populate('student_id')
        res.status(200).json({teacher})
    }
    catch(err) {
        res.status(500).json(err)
    }
}

// get single Teacher
const getSingleTeacher = async(req,res) => {
    const {id} = req.params;
    try {
        const teacher = await Teacher.findOne({_id:id})
        res.status(200).json({teacher})
    }
    catch(err) {
        res.status(500).json(err)
    }
}

// create Teacher
const createTeacher = async(req,res) => {
    try {
        const teacher = await Teacher.create(req.body);
        res.status(200).json({teacher})
    }
    catch(err) {
        res.status(500).json(err)
    }
}

// update Teacher
const updateTeacher = async(req,res) => {
    const {id} = req.params;
    try {
        const teacher = await Teacher.findOneAndUpdate({_id:id}, req.body)
        res.status(200).json({teacher, msg:'updated teacher successfully'})
    }
    catch(err) {
        res.status(500).json(err)
    }
}

// delete Teacher
const deleteTeacher = async(req,res) => {
    const {id} = req.params;
    try {
        const teacher = await Teacher.findOneAndDelete({_id:id})
        res.status(200).json({teacher, msg:'deleted teacher successfully'})
    }
    catch(err) {
        res.status(500).json(err)
    }
}
module.exports = {
    getAllTeachers,
    getSingleTeacher,
    createTeacher,
    updateTeacher,
    deleteTeacher,
   
}
