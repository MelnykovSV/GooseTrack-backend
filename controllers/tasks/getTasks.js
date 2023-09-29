const { taskSchema } = require("../../middlewares/validateForm");

const getTasks = async (req, res, next) => {
  const month = req.query.month;

  if (!month) {
    res.status(400).json({ message: "Parameter 'month' is required." });
    return;
  }

  const tasksCollection = generateTasksForMonth(month);

  res.json(tasksCollection);
};

function generateTasksForMonth(month) {
  const tasksForMonth = [
    { id: 1, title: "Task 1", month: month },
    { id: 2, title: "Task 2", month: month },
    { id: 3, title: "Task 3", month: month },
  ];
  return tasksForMonth;
}

module.exports = getTasks;
