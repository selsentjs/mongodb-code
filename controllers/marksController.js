
const Mark = require('../models/Marks');

// get all the Marks
const getAllMarks = async(req,res) => {
    try {
        const mark = await Mark.find()
        res.status(200).json({mark})
    }
    catch(err) {
        res.status(500).json(err)
    }
}

// get single Marks
const getSingleMark = async(req,res) => {
    const {id} = req.params;
    try {
        const mark = await Mark.findOne({_id:id})
        res.status(200).json({mark})
    }
    catch(err) {
        res.status(500).json(err)
    }
}

// create Marks
const createMark = async(req,res) => {
    try {
        const mark = await Mark.create(req.body)
        res.status(200).json({mark})
    }
    catch(err) {
        res.status(500).json(err)
    }
}

// update Marks
const updateMark = async(req,res) => {
    try {
        res.status(200).json({msg:'update mark'})
    }
    catch(err) {
        res.status(500).json(err)
    }
}

// delete Marks
const deleteMark = async(req,res) => {
    try {
        res.status(200).json({msg:'delete mark'})
    }
    catch(err) {
        res.status(500).json(err)
    }
}

module.exports = {
    getAllMarks,
    getSingleMark,
    createMark,
    updateMark,
    deleteMark
}
