const mongoose = require("mongoose");

async function connectToMongoDB() {
  const uri = "mongodb://localhost:27017/urlDB";

  try {
    await mongoose.connect(uri, {});
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = connectToMongoDB;
