const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const conn = require("./connection/Conn");

const user = require("./routes/User");
const course = require("./routes/Course");


const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
conn.connectDB();

// Use routers
app.use("/api/v1/", user);  // User routes
app.use("/api/v2/", course); // Course routes

// Basic GET route
app.get("/", (req, res) => {
    res.send({ message: "Hi" });
});

// Start the server
app.listen(8000, () => {
    console.log("Server running on port 8000...");
});


// GET http://localhost:8000/get-course/615f1bc1c4a1a204c073aed3
/*
{
  "course": {
    "_id": "615f1bc1c4a1a204c073aed3",
    "name": "Intro to AI",
    "title": "Artificial Intelligence Basics",
    "description": "Learn the fundamentals of AI",
    "content": {
      "chapter1": "Introduction to AI",
      "chapter2": "Machine Learning"
    },
    "user": {
      "_id": "615f1bc1c4a1a204c073aed2",
      "username": "john_doe",
      "email": "john@example.com"
    }
  }
}
*/


// GET http://localhost:8000/get-courses
/*
{
  "courses": [
    {
      "_id": "615f1bc1c4a1a204c073aed3",
      "name": "Intro to AI",
      "title": "Artificial Intelligence Basics",
      "description": "Learn the fundamentals of AI",
      "content": {
        "chapter1": "Introduction to AI",
        "chapter2": "Machine Learning"
      },
      "user": {
        "_id": "615f1bc1c4a1a204c073aed2",
        "username": "john_doe",
        "email": "john@example.com"
      }
    },
    {
      "_id": "615f1bc1c4a1a204c073aed4",
      "name": "Intro to Web Development",
      "title": "Basics of HTML, CSS, and JavaScript",
      "description": "Learn the basics of web development",
      "content": {
        "module1": "HTML",
        "module2": "CSS",
        "module3": "JavaScript"
      },
      "user": {
        "_id": "615f1bc1c4a1a204c073aed5",
        "username": "jane_doe",
        "email": "jane@example.com"
      }
    }
  ]
}
*/


// GET http://localhost:8000/get-course/:id
// GET http://localhost:8000/get-courses
