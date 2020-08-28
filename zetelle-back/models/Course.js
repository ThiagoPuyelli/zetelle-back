const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Instructor = require("./Instructor");

const courseSchema = new Schema({
    title: {type: String, required: true},
    videos: {type: [String], default: null},
    books: {type: [String], default: null},
    category: {type: String, required: true},
    rating: {type: Number, default: 0, min: 0, max: 10},
    students: {type: [String], default: null},
    description: {type: String, required: true},
    progress: {type: Number, default: 0},
    hours: {type: Number, default: 0},
    image: String,
    difficulty: {type: String, required: true}
})

module.exports = mongoose.model("Course", courseSchema);