const express = require("express");
const router = express.Router();

const tasks = [];

router.get("/tasks", (req, res) => {
  const tasksForMonth = [
    { id: 1, title: "Task 1", month: month },
    { id: 2, title: "Task 2", month: month },
    { id: 3, title: "Task 3", month: month },
  ];
  res.json(tasksForMonth);
});

router.post("/tasks", (req, res) => {
  const newTask = req.body;

  tasks.push(newTask);

  res.json(newTask);
});

router.patch("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const updatedData = req.body;

  const taskIndex = tasks.findIndex((task) => task.id === taskId);

  if (taskIndex !== -1) {
    tasks[taskIndex] = { ...tasks[taskIndex], ...updatedData };

    res.json(tasks[taskIndex]);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

router.delete("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((task) => task.id === taskId);

  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);

    res.status(204).send();
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

module.exports = router;
