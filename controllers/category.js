const Category = require("../models/category.js");

exports.Category = async (req, res) => {
    try {
        const category = await Category.findAll({
            attributes: {
                exclude: ['id', 'createdAt', 'updatedAt']
            }
        });
        res.json(category);
    } catch (error) {
        console.log(error);
        res.status(500).send("==Server Error==");
    }
};

exports.PostCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body, {
            attributes: {
                exclude: ['id', 'createdAt', 'updatedAt']
            }
        });
        res.json(category);
        // res.json({
        //     res: req.body,
        //     message: "Done"
        // })
    } catch (error) {
        console.log(error);
        res.status(500).send("==Server Error PostCategory==");
    }
};