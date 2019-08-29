const express = require("express");
const app = express();

app.listen(5050, () => {
    console.log("listening on 5050");
})

app.get("/api/name", questionController.getName);
f
