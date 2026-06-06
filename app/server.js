const express = require("express");
const mongoose = require("mongoose");

const app = express();

const mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello from Production Docker App 🚀");
});
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok"
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});