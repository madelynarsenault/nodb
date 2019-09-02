let user = {
    name: "",
    answer1: "",
    answer2: "",
    answer3: ""
}

const getQuestions = (req, res) => {

    res.json(questions)
};




const addName =(req, res) => {
    user.name = req.body.name
    
    res.json(user.name);
}

module.exports ={
    addName,
    getQuestions
}