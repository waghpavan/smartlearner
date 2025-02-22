const router = require("express").Router();
const fs = require('fs');
const data = require("../data.json");

const Course = require("../models/courses");
const User = require("../models/users");

const { GoogleGenerativeAI } = require("@google/generative-ai");


const genAI = new GoogleGenerativeAI("AIzaSyDwOjOnMqyqgKrXo3Ft1BNfA2d4fr11Vj4");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


// AI Testing Route...

// router.post("/prompting", async (req, res) => {

//     const { name, title, description, content, userId } = req.body;

//     // const result = await model.generateContent("tell me joke...");
//     // console.log(result.response.text());   
// // })
//     const mistake = content.mistake;

//     const keys = Object.keys(content)

//     for (let i = 0; i < keys.length; i++) {
//         if (mistake.includes(i)) {
//             const result = await model.generateContent(keys[i] + " in more Detail, make it simple and data should more than 1000 words.  write html only inside a div. use tailwind css strictly dont add html tag and head in it.");

//             content[keys[i]] = result.response.text();
//             console.log(keys[i]);
//         }
//     }

//     res.json({ "msg": "ok" })

//     // const result = await model.generateContent("Tell me a joke");
//     // res.json({"Answer" : result.response.text()});
// })









router.post("/create-course", async (req, res) => {
    try {
        const { name, title, description, mistake, content, userId } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const keys = Object.keys(content)

        for (let i = 0; i < keys.length; i++) {
            if (mistake.includes(i)) {
                const result = await model.generateContent(keys[i] + " in more Detail, make it simple and data should more than 1000 words.  write html only inside a div. use tailwind css strictly dont add html tag and head in it.");

                content[keys[i]] = result.response.text();
                console.log(keys[i]);
            }
        }

        const newCourse = new Course({
            name,
            title,
            description,
            content,
            mistake,
            user: [userId]
        });

        const savedCourse = await newCourse.save();


        user.courses.push(savedCourse._id);
        await user.save();

        res.status(201).json({ message: "Course added successfully", });
    } catch (error) {
        res.status(500).json({ message: "Error adding course", error: error.message });
    }
});

// get only 1 course
router.get("/get-course/:courseId", async (req, res) => {
    try {
        const { courseId } = req.params; // Extract courseId from URL parameters
        const course = await Course.findById(courseId); // Find the course by ID

        if (!course) {
            return res.status(404).json({ message: "Course not found" }); // Handle case if no course found
        }

        res.status(200).json(course); // Return the found course
    } catch (error) {
        res.status(500).json({ message: "Error fetching course", error: error.message }); // Handle server errors
    }
});



// GET all courses for a specific user
router.get("/get-courses/:userId", async (req, res) => {
    try {
        const { userId } = req.params; // Get the userId from the request parameters
        const courses = await Course.find({ user: userId }).populate("user"); // Fetch courses where the user matches the userId

        if (courses.length === 0) {
            return res.status(404).json({ message: "No courses found for this user" });
        }
        const reversedCourses = courses.reverse();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: "Error fetching courses", error: error.message });
    }
});

module.exports = router;