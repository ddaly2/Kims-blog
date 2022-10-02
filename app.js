const express = require("express");
const bodyParser = require("body-parser");
import getDay from "./date";

const app = express();
let post = {
     title: "",
     description: "",
     content: ""
};
let posts = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
     
     res.render("home", {
          todaysDate: getDay(),
          posts: posts
     });
});

app.post("/", (req, res) => {

     entry = {
          title: req.body.title,
          description: req.body.description,
          content: req.body.content
     }

     posts.push(entry);
     console.log(posts)

     res.redirect("/");
})





app.listen(3000, () => {
     console.log("Server started on port 3000");
});