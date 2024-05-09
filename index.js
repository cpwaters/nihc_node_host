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

app.get("/scores", function (req, res) {
  res.render("scores");
});

app.get("/schedule", function (req, res) {
  res.render("schedule");
});

app.get("/standings", function (req, res) {
  res.render("standings");
});

app.get("/players", function (req, res) {
  res.render("players");
});

app.get("/goalies", function (req, res) {
  res.render("goalies");
});
// need try catch
app.listen(port, function () {
  console.log(`app on port ${port}`);
});
