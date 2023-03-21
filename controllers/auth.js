const User = require("../models/auth.js");


const db = require("../database/db");

// exports.login = async (req, res) => {
//     try {
//         const {
//             username,
//             password
//         } = req.body;
//         var user = await User.findOne({
//             where: {
//                 username: username,
//                 userpassword: password
//             },
//         });
//         if (user) {
//             // console.log(user.username);
//             // console.log(username);
//             // res.send("Hello Login!");

//             //Payload
//             const payload = {
//                 user: {
//                     id: user.id,
//                     username: user.username,
//                     userpassword: user.userpassword
//                 },
//             };
//             //Generate Token
//             jwt.sign(payload, "jwtSecret", {
//                 expiresIn: 3600
//             }, (error, token) => {
//                 if (error) throw error;
//                 res.json({
//                     token,
//                     payload
//                 });
//             });
//         } else {
//             return res.status(400).send("User not found!!!");
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).send("==Server Error==");
//     }
// };



exports.login = async (req, res) => {
    // Capture the input fields
    const username = req.body.user_name;
    const password = req.body.user_password;

    console.log(req.body);

    var user = await User.findOne({
        where: {
            user_name: username,
            user_password: password
        },
        attributes: {
            exclude: ['id', 'createdAt', 'updatedAt']
        }
    })
    // Ensure the input fields exists and are not empty
    if (user) {
        res.send("loginnnnnn")
        // Execute SQL query that'll select the account from the database based on the specified username and password
        // User.query('SELECT * FROM user WHERE user_name = ? AND user_password = ?', [username, password], function (error, results, fields) {
        //     // If there is an issue with the query, output the error
        //     if (error) throw error;
        //     // If the account exists
        //     if (results.length > 0) {
        //         // Authenticate the user
        //         req.session.loggedin = true;
        //         req.session.username = username;
        //         // Redirect to home page
        //         res.redirect('/home');
        //     } else {
        //         res.send('Incorrect Username and/or Password!');
        //     }
        //     res.end();
        // });
    } else {
        res.send('Please enter Username and Password!');
        res.end();
    }
}