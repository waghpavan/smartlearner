const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },

    content : {
        type : Object,
        required : true
    },
    mistake : {
        type : Array,
        required : true
    },
    user: [
        {
            type: mongoose.Types.ObjectId,
            ref: "User"
        }
    ]
})

module.exports = mongoose.model("Course" , courseSchema);