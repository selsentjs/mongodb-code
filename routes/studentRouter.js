const express = require('express');

const router = express.Router()
const {
    getAllStudents,
    getSingleStudent,
    createStudent,
    updateStudent,
    deleteStudent,
    getnameWithParent,
    getNameWithMarks
} = require('../controllers/studentController');

router.get('/', getAllStudents);
router.get('/name-with-parent', getnameWithParent);
router.get('/name-with-marks', getNameWithMarks)
router.get('/:id',getSingleStudent);
router.post('/', createStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);



module.exports = router;