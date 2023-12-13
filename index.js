const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());
const port = 3000;
app.use(express.json());

const userRouter = require("./routers/users");

app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log(port, `You are in port ${port}`);
});
