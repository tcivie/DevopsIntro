const express = require('express');
const Student = require('../models/Student');
const router = express.Router();

router.post('/', async (req, res) => {
    console.log(req.body);  // Log incoming data
    const student = new Student(req.body);
    const savedStudent = await student.save();
    res.status(201).send(savedStudent);
});


module.exports = router;
