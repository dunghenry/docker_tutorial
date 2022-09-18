const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const connectDB = require("./configs/connect.db");
const port = process.env.PORT || 4000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
connectDB();
app.get("/", (req, res) => {
  res.send("Hehe");
});

app.listen(port, function () {
  console.log(`Server listening on http://localhost:${port}`);
});
