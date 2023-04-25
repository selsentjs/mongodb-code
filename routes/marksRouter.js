const express = require('express');

const router = express.Router()
const {
    getAllMarks,
    getSingleMark,
    createMark,
    updateMark,
    deleteMark
} = require('../controllers/marksController');

router.route('/').get(getAllMarks);
router.route('/:id').get(getSingleMark);
router.route('/').post(createMark);
router.route('/:id').put(updateMark);
router.route('/:id').delete(deleteMark)





module.exports = router;