
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

// display student name with parent details
const getnameWithParent = async(req,res) => {
    try{
        const nameWithParent = await Student.aggregate([
            {
                $project: {_id:0, student_name:1, parent:1}
            }
        ])
        console.log("nameWithParent:", nameWithParent);
        return res.send({nameWithParent})
    }
    catch (err) {
        console.log(err)
    }
    
}

// student name with mark details (connect students and marks table)

const getNameWithMarks = async(req,res) => {
    try{
        const nameWithMarks = await Student.aggregate([
       
            {
                $lookup: {
                 from: "marks",
                 localField: "_id",
                 foreignField: "student_id",
                 as:"Mark"
                }
            },
                {
               
                    $project: {student_name: 1,
                        stream: 1,
                        "Mark.name_of_test": 1,
                        "Mark.subject": 1}
                }
            
               
            ])
            return res.send(nameWithMarks)
    
    }
    catch(err) {
        console.log(err)
    }


}


module.exports = {
    getAllStudents,
    getSingleStudent,
    createStudent,
    updateStudent,
    deleteStudent,
    getnameWithParent,
    getNameWithMarks
   
}
