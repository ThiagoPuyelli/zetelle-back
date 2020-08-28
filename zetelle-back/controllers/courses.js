const Course = require("../models/Course");

module.exports = controllers = {
    async createCourse(req, res){
        const { title, category, rating, description, difficulty } = req.body;

        const newCourse = new Course();

        newCourse.title = title;
        newCourse.category = category;
        newCourse.rating = rating;
        newCourse.description = description;
        newCourse.difficulty = difficulty;

        await newCourse.save((err, courseSaved) => {
            if(err) return res.status(500).send("Ha ocurrido un error al subir el curso");

            if(!courseSaved) return res.status(404).send("Los datos del curso no son válidos");

            if(courseSaved) return res.status(200).json(courseSaved);
        })
    },
    async findCourses(req, res){
        await Course.find((err, courses) => {
            if(err) return res.status(500).send("Error al buscar cursos");

            if(!courses) return res.status(404).send("No se encuentran cursos");

            if(courses) return res.status(200).json(courses);
        })
    },
    async findCourse(req, res){
        const courseId = req.params.id;

        await Course.findById(courseId, (err, course) => {
            if(err) return res.status(500).send("Error al buscar curso");

            if(!course) return res.status(404).send("No se encuentra ese curso");

            if(course) return res.status(200).json(course);
        })
    },
    async uploadCourse(req, res){
        const { title, category, rating, description, difficulty } = req.body;
        const courseId = req.params.id;

        await Course.findByIdAndUpdate(courseId, { title, category, rating, description, difficulty }, {new: true} ,(err, course) => {
            if(err) return res.status(500).send("Error al modificar curso");

            if(!course) return res.status(404).send("No se encuentra ese curso");

            if(course) return res.status(200).json(course);
        })
    },
    async deleteCourse(req, res){
        const courseId = req.params.id;

        await Course.findByIdAndRemove(courseId, (err, course) => {
            if(err) return res.status(500).send("Error al eliminar curso");

            if(!course) return res.status(404).send("No se encuentra ese curso");

            if(course) return res.status(200).send("Curso eliminado con éxito");
        })
    }
}