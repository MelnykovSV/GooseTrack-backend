const { HttpError } = require("../../helpers/index");
const { Task } = require("./../../models/task");

const { dateRegexp } = require("./../../regexp");

const getTasksByDay = async (req, res) => {
  const user = req.user;

  const day = req.params.day;

  if (!dateRegexp.test(day)) {
    throw HttpError(400, "Date has to be in format 'YYYY-MM-DD'");
  }

  const tasks = await Task.find(
    { date: day, owner: user._id },
    "-owner -createdAt -updatedAt"
  );

  if (!tasks.length) {
    throw HttpError(404, "No tasks found");
  }

  res.status(200).json({
    code: 200,
    message: `Tasks for ${day}`,
    data: tasks,
  });
};

module.exports = getTasksByDay;
