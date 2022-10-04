import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import getDay from "./date.js";
import _ from "lodash";
import mongoose from "mongoose";


//The below 3 lines are how to incorporate "__dirname" when you are using import modules vs. require()
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

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
          todaysDate: getDay,
          posts: posts
     });

});

app.get("/compose", (req, res) => {
     res.render("compose");
})

app.post("/compose", (req, res) => {
     post = {
          title: req.body.title,
          description: req.body.description,
          content: req.body.content
     }

     posts.push(post);

     res.redirect("/");
})

app.get("/about", (req, res) => {
     res.render("about");
})


app.get("/contact", (req, res) => {
     res.render("contact");
})

app.get("/article", (req, res) => {
     res.render("article", {
          posts: posts
     });
})



app.listen(3000, () => {
     console.log("Server started on port 3000");
});