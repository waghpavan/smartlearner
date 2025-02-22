    const router = require("express").Router();
    const User = require("../models/users");

    // POST create a new user
    router.post('/signup', async (req, res) => {
        
        try {
            const { email, username, password, courses } = req.body;

            if (!email || !password) {
                return res.status(400).json({ message: "Email and password are required" });
            }

            // Check if the user already exists
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: "User already exists with this email" });
            }

            

            const newUser = new User({
                email,
                username,
                password,
                courses
            });

            await newUser.save();
            res.status(201).json({ message: 'User created successfully', user: newUser });
        } catch (error) {
            console.error("Error creating user: ", error.message);  // Log error
            res.status(500).json({ message: `Error creating user: ${error.message}` });
        }
    });

    // POST login user
    router.post("/login", async (req, res) => {
        try {
            const { email, password } = req.body; // Extract email and password from request body

            // Find user by email
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            // Compare the password with the hashed password
            const isMatch = password === user.password;
            if (!isMatch) {
                return res.status(401).json({ message: "Invalid credentials" });
            }

            // If login is successful, return user data (excluding password)
            const { password: userPassword, ...userData } = user._doc; // Exclude password from the response
            res.status(200).json({ message: "Login successful", user: userData });
        } catch (error) {
            res.status(500).json({ message: "Error logging in", error: error.message });
        }
    });

    module.exports = router;
