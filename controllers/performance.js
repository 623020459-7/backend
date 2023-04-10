const Performance = require("../models/performance.js");
const {
    Category
} = require("../models/category");

const app = Performance;

exports.listPerformance = async (req, res) => {
    try {
        const performance = await Performance.findAll({
            attributes: {
                exclude: ['id', 'createdAt', 'updatedAt']
            }
        });
        res.json(performance);
    } catch (error) {
        console.log(error);
        res.status(500).send("==Server Error==");
    }
};

exports.getPerformance = async (req, res) => {
    try {
        // console.log(">>>>>>ID : ", req.params.id);
        // console.log(">>>>>>params : ", req.params);

        const performance = await Performance.findOne({
            where: {
                performance_id: req.params.id
            },
            attributes: {
                exclude: ['id', 'createdAt', 'updatedAt']
            }
        });
        res.json(performance);
    } catch (error) {
        console.log(error);
        res.status(500).send("==Server Error==");
    }
};

exports.getPerformanceCategory = async (req, res) => {
    try {
        const performance = await Performance.findAll({
            // include: {
            //     model: Category,
            //     as: 'category'
            // },
            attributes: {
                exclude: ['id', 'createdAt', 'updatedAt']
            }
        });
        res.json(performance);
    } catch (error) {
        console.log(error);
        res.status(500).send("== Server Error: on Performance & Category ==");
    }
};
exports.getPerformanceCategoryId = async (req, res) => {
    try {
        const performance = await Performance.findAll({
            where: {
                category_id: req.params.id
            },
            // include: {
            //     model: Category,
            //     as: 'category'
            // },
            attributes: {
                exclude: ['id', 'createdAt', 'updatedAt']
            }
        });
        res.json(performance);
    } catch (error) {
        console.log(error);
        res.status(500).send("== Server Error: on Performance & Category ==");
    }
};


exports.postPerformance = async (req, res) => {
    try {

        console.log("postPerformance API: ");
        data = req.body;
        const performance = await Performance.create({
            performance_name: data.name,
            performance_sculptute: data.sculptute,
            performance_location: data.location,
            performance_image: data.image,
            performance_type: data.type,
            performance_size: data.size,
            category_id: parseInt(data.category)
        }, {

            attributes: {
                exclude: ['id', 'createdAt', 'updatedAt']
            }
        });
        res.json(performance);


    } catch (error) {
        console.log(error);
        res.status(500).send("==Server Error PostPerformance==");
    }
};

exports.putPerformance = async (req, res) => {
    try {
        const performance_id = req.params.id

        console.log("req.body", req.body);
        console.log("req.params", req.params);

        const performance = await Performance.findByPk(performance_id, {
            attributes: {
                exclude: ['id', 'createdAt', 'updatedAt']
            }
        });
        await performance.update(req.body)
        await performance.save()
        res.json(performance);
        // res.json({
        //     res: req.body,
        //     message: "Done"
        // })
    } catch (error) {
        console.log(error);
        res.status(500).send("==Server Error PutPerformance==");
    }
};

exports.deletePerformance = async (req, res) => {
    try {
        const performance_id = req.params.id
        console.log(req.body);
        console.log(req.params);
        const performance = await Performance.findByPk(performance_id, {
            attributes: {
                exclude: ['id', 'createdAt', 'updatedAt']
            }
        });

        await performance.destroy()
        res.json({
            message: "ID[" + performance_id + "] was deleted!"
        });
        // res.json({
        //     res: req.body,
        //     message: "Done"
        // })
    } catch (error) {
        console.log(error);
        res.status(500).send("==Server Error PutPerformance==");
    }
};