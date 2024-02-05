const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const urlRoute = require("./routes/url.js");
const authRoute = require("./routes/auth.js");
const dotenv = require("dotenv");
const mongoDB = require("./config/mongooseDB.js");

const cors = require("cors");

const app = express();

// Connect to MongoDB
mongoDB();

dotenv.config();

//use cors to allow cross origin resource sharing
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello There!");
});

app.use("/api/auth", authRoute);
app.use("/api/url", urlRoute);

let port = process.env.PORT || 8000;

app.listen(port, function () {
  console.log("Server started successfully on port: ", port);
});
