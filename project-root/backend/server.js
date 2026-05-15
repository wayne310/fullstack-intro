const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5000;

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/studentdb")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Schema
const Student = require("./models/Student");

// POST API
app.post("/students", async (req, res) => {
  try {
    const data = new Student(req.body);
    await data.save();
    res.json({ message: "Student saved successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET API
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});