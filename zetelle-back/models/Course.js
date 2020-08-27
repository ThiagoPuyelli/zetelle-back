const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Instructor = require("./Instructor");

const courseSchema = new Schema({
    videos: [String],
    books: [String],
    category: {type: String, required: true},
    rating: {type: Number, default: 0},
    students: {type: [String], default: null},
    description: {type: String, required: true},
    instructor: {type: Instructor, required: true},
    progress: {type: Number, default: 0},
    hours: {type: Number, default: 0},
    difficulty: {type: String, required: true}
})

module.exports = mongoose.model("Course", courseSchema);