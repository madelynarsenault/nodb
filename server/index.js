const express = require("express");
const app = express();
const questionsController = require ("./controllers/questionController");
const plantController = require ('./controllers/plantController')

app.use(express.json());


app.post("/api/name", questionsController.addName);
app.get("/api/questions", questionsController.getQuestions);
app.get("/api/results", plantController.getPlants);





app.listen(5050, () => {
console.log("listening on 5050");
})
