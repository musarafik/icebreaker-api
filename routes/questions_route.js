const express = require("express");
const router = express.Router();

const { 
    getQuestion,
    getAllQuestions,
    submitQuestion
} = require("../controllers/questions_controller.js");

router.get("/single", getQuestion);

router.get("/all", getAllQuestions);

router.post("/", submitQuestion);

module.exports = router;