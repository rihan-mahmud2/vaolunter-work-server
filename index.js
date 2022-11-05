const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("The server is running");
});

app.listen(port, () => {
  console.log("The server is listening at", port);
});
