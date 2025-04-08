require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const auth_route = require("./routes/auth");
const jobs_route = require("./routes/jobs");
const applications_route = require("./routes/applications");

app.use("/auth", auth_route);
app.use("/jobs", jobs_route);
app.use("/applications", applications_route);

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "anuj@123",
    database : "job_portal"

});
db.connect(err => {
    if (err) throw err;
    console.log("MySQL Connected");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
