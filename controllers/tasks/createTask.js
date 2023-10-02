const { Task } = require("./../../models/task");

const createTask = async (req, res) => {
  const user = req.user;

  const { title, priority, status, date, start, end, _id } = await Task.create({
    ...req.body,
    owner: user._id,
  });

  res.status(201).json({
    code: 201,
    message: "New task created",
    data: { _id, title, priority, status, date, start, end },
  });
};

module.exports = createTask;
