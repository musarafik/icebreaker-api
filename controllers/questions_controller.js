const questions = require("../questions.js");

const getQuestion = ((req, res) => {
    questionsList = questions["questions"];
    const questionIndex = getRndInteger(0, questionsList.length);
    res.send({"question": questionsList[questionIndex]});
});

const getAllQuestions = ((req, res) => {
    res.send(questions);
});

const submitQuestion = ((req, res) => {
    res.send("test submit");
})

const getRndInteger = ((min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
});

module.exports = {
    getQuestion,
    getAllQuestions,
    submitQuestion
};