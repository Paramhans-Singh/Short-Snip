const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("../model/user");

exports.loginController = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { user: { id: user.id, email: user.email } },
    process.env.JWT_SECRET
  );
  res.json({ token });
};

exports.registerController = async (req, res) => {
  const { username, email, password } = req.body;

  // Check if the username already exists
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ error: "Username already exists" });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  const user = new User({ username, email, password: hashedPassword });
  await user.save();

  const token = jwt.sign(
    { user: { id: user.id, email: user.email } },
    process.env.JWT_SECRET
  );
  res.json({ token });
};
