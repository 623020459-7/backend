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

app.use(cors());
app.use(express.json());

try {
    db.authenticate()
    console.log('Connection to database successfully.');
} catch (error) {
    console.error('Unable to connect to the database: ', error);
};

// app.get("/", (req, res) => {
//   res.send("Welcome");
// });
// app.get('/api/performance', function (req, res, next) {
//     db.query(
//         'SELECT * FROM `performance`',
//         function (err, results, fields) {
//             res.json(results);
//         }
//     );
// })

// app.get('/api/performance/:id', function (req, res, next) {
//     const id = req.params.id;
//     console.log('id.......', id)
//     db.query(
//         'SELECT * FROM `performance` WHERE `id` = ?',
//         [id],
//         function (err, results) {
//             res.json(results);
//         }
//     );
// })

// 




// app.post('/performance', function (req, res, next) {
//     connection.query(
//         'INSERT INTO `performance`(`performance_name`, `performance_sculptute`, `performance_location`, `performance_image`, ) VALUES (?, ?, ?, ?, ?)',
//         [req.body.performance_name, req.body.performance_sculptute, req.body.performance_location, req.body.performance_image, ],
//         function (err, results) {
//             res.json(results);
//         }
//     );
// })
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