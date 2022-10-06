const express = require('express');
const router = express.Router();
const {getQuestions, createQuestion, updateQuestion, deleteQuestion, getQuestion} = require('../controllers/quizfunc')

router.route('/getQuestions').get(getQuestions);
router.route('/getQuestion/:id').get(getQuestion);
router.route('/createQuestion').post(createQuestion);
router.route('/updateQuestion/:id').put(updateQuestion);
router.route('/deleteQuestion/:id').delete(deleteQuestion);

module.exports = router;