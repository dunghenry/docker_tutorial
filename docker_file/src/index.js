const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const app = express();
dotenv.config();
// require('./configs/connect.db');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use("/", (req, res) => {
    res.send("Hi")
})
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));