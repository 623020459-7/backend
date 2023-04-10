const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser");
const morgan = require("morgan");
const {
    readdirSync
} = require("fs");
require("dotenv").config();
const Sequelize = require("sequelize");

//database
const db = require('./database/db.js')

const app = express();

// const mockToken = '2e31373760c7f20d7e897fe94cdf4144239bacdd3877bb4b'
// const mockUser = {
//     id : 1,
//     name : 'john doe',
//     email: 'john@done.com'
// }


app.use(cors());
app.use(express.json());

try {
    db.authenticate()
    console.log('Connection to database successfully.');
} catch (error) {
    console.error('Unable to connect to the database: ', error);
};

// const router = express.Router()



//middleware
app.use(morgan("dev"));
app.use(bodyParser.json({
    limit: "20mb"
}));
app.use(cors());

//Route => http://localhost:8000/api/
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));



app.listen(8000, () => {
    console.log("Server running in http://localhost:8000/")
});