const express = require("express");
const app = express();
const path = require("node:path");
const cors = require("cors");
const port = 8000;

app.use(cors());

// View engine setup
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "./static")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/contact", function (req, res) {
  res.render("contact");
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

// app.use("/standings", function (req, res) {
//   res.render("standings");
// });

// app.use("/players", function (req, res) {
//   res.render("players");
// });

// app.use("/goalies", function (req, res) {
//   res.render("goalies");
// });

// need try catch
app.listen(port, function () {
  console.log(`app on port ${port}`);
});
