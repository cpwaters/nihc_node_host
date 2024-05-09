const express = require("express");
const app = express();
const path = require("node:path");
const cors = require("cors");
const port = 8000;

app.use(cors());

// View engine setup
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "./static")));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/league-statistics", function (req, res) {
  res.render("stats");
});
// need try catch
app.listen(port, function () {
  console.log(`app on port ${port}`);
});
