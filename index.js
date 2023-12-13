const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
    

app.listen(port, () => {
  console.log(port, `You are in port ${port}`);
});
