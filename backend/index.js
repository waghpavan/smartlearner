const express = require("express");
const cors = require("cors");
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


// Start the server
app.listen(8000, () => {
    console.log("Server running on port 8000...");
});