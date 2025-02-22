const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    courses: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Course"
        }
    ]
});

module.exports = mongoose.model("User", userSchema);
