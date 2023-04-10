const User = require("../models/auth.js");
const db = require("../database/db");
exports.getUser = async (req, res) => {
    try {
        const user = await User.findAll({
            attributes: {
                exclude: ['id', 'createdAt', 'updatedAt']
            }
        });
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).send("==Server Error==");
    }
};
exports.login = async (req, res) => {
    const {
        username,
        password
    } = req.body
    console.log(username, password, req.body);
    if (username == "Kanokphon" && password == "1234567") {
        return res.status(200).json({
            data: {
                username,
                password,
                token: 'THIS_IS_TOKEN'
            }
        });
    } else {
        return res.status(401).json({
            message: 'Invalid Password'
        });
    }
};