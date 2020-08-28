const express = require("express");
const morgan = require("morgan");
const usersRoutes = require("./routes/users");
const coursesRoutes = require("./routes/courses");

const app = express();

// DATABASE
require("./database");

// PORT
app.set("port", process.env.PORT || "3000");

// MIDDLEWARES
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// ROUTES
app.use("/user/", usersRoutes);
app.use("/course/", coursesRoutes);

// START SERVER
app.listen(app.get("port"), () => {
    console.log("Start de server on port " + app.get("port"));
})