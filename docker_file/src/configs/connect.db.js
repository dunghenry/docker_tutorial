// const mongoose = require("mongoose");
// const options = {
//   autoIndex: true,
//   serverSelectionTimeoutMS: 5000,
//   socketTimeoutMS: 45000,
// };
// mongoose
//   .connect(process.env.MONGODB_URI, options)
//   .then(() => console.log("Connected to MongoDB successfully!"))
//   .catch((error) => {
//     console.log(error);
//     console.log("Connected to MongoDB failed!");
//     process.exit(1);
//   });

// mongoose.connection.on("connecting", () => {
//   console.log("Connecting to MongoDB successfully!");
// });
// mongoose.connection.on("error", (err) => {
//   console.log(err);
//   process.exit(1);
// });
