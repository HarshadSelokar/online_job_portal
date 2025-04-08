const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/post-job", (req, res) => {
    const { employer_id, title, description, location, category, salary } = req.body;

    const sql = "INSERT INTO jobs (employer_id, title, description, location, category, salary) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(sql, [employer_id, title, description, location, category, salary], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Job posted successfully!" });
    });
});

router.get("/get-jobs", (req, res) => {
    db.query("SELECT * FROM jobs", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

module.exports = router;
