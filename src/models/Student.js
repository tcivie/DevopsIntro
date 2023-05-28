const mongoose = require('mongoose');

// Define Student model
const Student = mongoose.model('Student', new mongoose.Schema({
  name: String,
  examScores: [Number]
}));

module.exports = Student;
