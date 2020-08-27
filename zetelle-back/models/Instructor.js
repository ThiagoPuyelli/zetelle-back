const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Course = require("./Course");

const instructorSchema = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    Courses: {type: [Course], default: null},
    rating: {type: Number, default: 0}
})

module.exports = mongoose.model("Instructor", instructorSchema);