const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Course = require("./Course");

const studentSchema = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    courses: {type: [Course], default: null},
    level: {type: String, required: true},
    category: {type: String, required: true}
})

module.exports = mongoose.model("Student", studentSchema);