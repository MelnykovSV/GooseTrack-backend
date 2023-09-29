const { DailyTask } = require("../../models/tasks");
const { HttpError } = require("../../helpers");

const getTasksByDay = async (req, res, next) => {
  const date = req.query.date;

  if (!date) {
    res.status(400).json({ message: "Parameter 'date' is required." });
    return;
  }

  const tasksCollection = generateTasksForDay(date);

  res.json(tasksCollection);
};

function generateTasksForDay(date) {
  const tasksForDay = [
    { id: 4, title: "Task 4", date: date },
    { id: 5, title: "Task 5", date: date },
    { id: 6, title: "Task 6", date: date },
  ];
  return tasksForDay;
}

module.exports = getTasksByDay;
