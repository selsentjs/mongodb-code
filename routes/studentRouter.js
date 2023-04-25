const express = require('express');

const router = express.Router()
const {
    getAllStudents,
    getSingleStudent,
    createStudent,
    updateStudent,
    deleteStudent,
    studentAndteacher
} = require('../controllers/studentController');

router.route('/').get(getAllStudents);
router.route('/:id').get(getSingleStudent);
router.route('/').post(createStudent);
router.route('/:id').put(updateStudent);
router.route('/:id').delete(deleteStudent);




module.exports = router;