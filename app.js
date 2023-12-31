const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

require("dotenv").config();

const authRouter = require("./routes/api/auth");
const reviewRouter = require("./routes/api/reviews");
const tasksRouter = require("./routes/api/tasks");
const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/tasks", tasksRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((_, res) => {
  res.status(400).json({
    status: "error",
    code: 400,
    message: "Bad request",
    data: "Not found",
  });
});

app.use((err, _, res, __) => {
  const { status = 500, message = "Internal Server Error" } = err;
  res.status(status).json({
    status: "error",
    code: status,
    message: message,
  });
});

module.exports = app;
