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

app.get("/bracket-1", function (req, res) {
  res.render("bracket-1");
});

app.get("/bracket-2", function (req, res) {
  res.render("bracket-2");
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

app.get("/contact", function (req, res) {
  res.render("contact");
});
// need try catch
app.listen(port, function () {
  console.log(`app on port ${port}`);
});
