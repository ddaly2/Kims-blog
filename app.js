import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import getDay from "./date.js";


//The below 3 lines are how to incorporate "__dirname" when you are using import modules vs. require()
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

let entry = {
     title: "",
     description: "",
     content: ""
};
let posts = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
     res.render("home", {
          todaysDate: getDay,
          posts: posts
     });
});

app.get("/compose", (req, res) => {
     res.render("compose");
})

app.post("/compose", (req, res) => {
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