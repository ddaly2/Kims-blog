const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
     let date = new Date().toLocaleDateString();
     
     res.render("home", {todaysDate: date});
});

app.post("/", (req, res) => {
     res.write("<h1>This is your name</h1>");
     res.write(`Your name is ${req.body.userName}`);
     res.send();
})





app.listen(3000, () => {
     console.log("Server started on port 3000");
});