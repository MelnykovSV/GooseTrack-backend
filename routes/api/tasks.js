const express = require("express");
const router = express.Router();
const { authenticate, validateBody } = require("./../../middlewares/index");
const {
  createTaskJoiSchema,
  updateTaskJoiSchema,
} = require("./../../models/task");
const { isValidTaskId } = require("./../../middlewares/index");

const {
  createTask,
  updateTask,
  deleteTask,
  getTasksByDay,
  getTasksByMonth,
} = require("./../../controllers/tasks");

router.post("/", authenticate, validateBody(createTaskJoiSchema), createTask);
router.get("/getByDay/:day", authenticate, getTasksByDay);
router.get("/getByMonth/:month", authenticate, getTasksByMonth);
router.patch(
  "/:taskId",
  authenticate,
  isValidTaskId,
  validateBody(updateTaskJoiSchema),
  updateTask
);
router.delete("/:taskId", authenticate, isValidTaskId, deleteTask);

module.exports = router;
