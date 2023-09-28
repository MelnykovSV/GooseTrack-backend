const express = require("express");
const router = express.Router();

app.get("/tasks", (req, res) => {
    const month = req.query.month;
    
    if (!month) {
      res.status(400).json({ message: "Параметр 'month' є обов'язковим" });
      return;
    }

    const tasksCollection = generateTasksForMonth(month);

     res.json(tasksCollection);
});

function generateTasksForMonth(month) {

    const tasksForMonth = [
      { id: 1, title: "Task 1", month: month },
      { id: 2, title: "Task 2", month: month },
      { id: 3, title: "Task 3", month: month },
    ];
   return tasksForMonth;
};

const tasks = [];

app.post("/tasks", (req, res) => {
  const newTask = req.body;

  tasks.push(newTask);

  res.json(newTask);
});

app.patch("/tasks/:id", (req, res) => {
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

app.delete("/tasks/:id", (req, res) => {

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
