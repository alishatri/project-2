const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
app.use(bodyParser.json());

const userRouters = require("./routers/users");
const taskRouters = require("./routers/tasks");
const taskStatusRouters = require("./routers/taskStatus");
app.use(cors());

app.use("/api/users", userRouters);
app.use("/api/tasks", taskRouters);
app.use("/api/tasksStatus", taskStatusRouters);

app.listen(port, () => {
  console.log(port, `You are in port ${port}`);
});
