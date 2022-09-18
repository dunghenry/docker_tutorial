const mongoose = require("mongoose");
console.log("Haha")
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB successfully!!");
  } catch (error) {
    console.log(error);
    console.log("Connected to MongoDB failed!");
    // exit(0);
  }
};

module.exports = connectDB;
