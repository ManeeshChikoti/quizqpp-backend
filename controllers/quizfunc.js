const questionModel = require('../models/questions');

const getQuestions = async(req, res) =>{

    try{
        let questions = await questionModel.find({});

        if(questions){
            res.json(questions)
        }
    }catch(err){
        console.log(err)
    }   
}

const getQuestion = async(req, res) =>{

    try{
        let questions = await questionModel.findById(req.params.id);

        if(questions){
            res.json(questions)
        }
    }catch(err){
        console.log(err)
    }   
}

const createQuestion = async(req, res) => {
    try{
        const question = new questionModel({
            question: req.body.question,
            option1: req.body.option1,
            option2: req.body.option2,
            option3: req.body.option3,
            answer: req.body.answer
        })

        const createData = await question.save();

        if(createData){
            res.send(createData)
        }
    } catch(err){
        console.log(err)
    }
}

const updateQuestion = async (req, res) =>{
    try{
        let question = await questionModel.findByIdAndUpdate(req.params.id, req.body)

        if(question){
            res.send("Updated Successfully")
        }
    } catch(err){
        console.log(err)
    }
}

const deleteQuestion = async(req, res)=>{
    try{
        let question = await questionModel.findByIdAndDelete(req.params.id)

        if(question){
            res.send("Deleted Successfully")
        }
    } catch(err){
        console.log(err)
    }
    
}

module.exports = {getQuestions, createQuestion, updateQuestion, deleteQuestion, getQuestion}