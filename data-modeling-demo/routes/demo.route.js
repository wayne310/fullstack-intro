const express = require("express");

const router = express.Router();

const User = require("../models/user.model");
const Task = require("../models/task.model");


// CREATE USER
router.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({
      message: "Validation Error",
      error: error.message
    });
  }
});


// GET USERS
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});


// CREATE TASK
router.post("/tasks", async (req, res) => {
  try {
    const task = await Task.create(req.body);

    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({
      message: "Validation Error",
      error: error.message
    });
  }
});


// GET TASKS WITH POPULATE
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find().populate("userId");

    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

module.exports = router;