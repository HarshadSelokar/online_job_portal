const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/apply-job", (req, res) => {
    const { job_id, job_seeker_id } = req.body;

    const sql = "INSERT INTO applications (job_id, job_seeker_id) VALUES (?, ?)";
    db.query(sql, [job_id, job_seeker_id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Job application submitted!" });
    });
});


router.get("/my-applications/:id", (req, res) => {
    const job_seeker_id = req.params.id;

    const sql = "SELECT jobs.* FROM applications JOIN jobs ON applications.job_id = jobs.id WHERE applications.job_seeker_id = ?";
    db.query(sql, [job_seeker_id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

module.exports = router;
