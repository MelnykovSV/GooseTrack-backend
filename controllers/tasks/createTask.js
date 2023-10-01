// const { HttpError } = require("../../helpers/index");
const { Task } = require("./../../models/task");
// const { nanoid } = require("nanoid");

// require("dotenv").config();

const createTask = async (req, res) => {
  const user = req.user;
  //   const { title, priority, status, date, start, end } = req.body;

  const { title, priority, status, date, start, end } = await Task.create({
    ...req.body,
    owner: user._id,
  });

  res.status(201).json({
    code: 201,
    message: "New task created",
    data: { title, priority, status, date, start, end },
  });
};

module.exports = createTask;
