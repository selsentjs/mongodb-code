const express = require('express');

const router = express.Router()

const {
    getAllTeachers,
    getSingleTeacher,
    createTeacher,
    updateTeacher,
    deleteTeacher,
  

} = require('../controllers/teacherController');

router.route('/').get(getAllTeachers);
router.route('/:id').get(getSingleTeacher);
router.route('/').post(createTeacher);
router.route('/:id').put(updateTeacher);
router.route('/:id').delete(deleteTeacher)





module.exports = router;