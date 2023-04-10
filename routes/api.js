const {
    listPerformance,
    getPerformance,
    getPerformanceCategory,
    getPerformanceCategoryId,
    postPerformance,
    putPerformance,
    deletePerformance,
} = require("../controllers/performance");

const express = require("express");
const {
    login,
    getUser
} = require("../controllers/auth");
const {
    Category,
    PostCategory
} = require("../controllers/category");
const router = express.Router();

router.get("/performance", listPerformance)
router.post("/user", login)
router.get("/getUser", getUser)
router.get("/getPerformance/:id", getPerformance)
router.get("/category", Category)
router.post("/post/category", PostCategory)
router.get("/performance_category", getPerformanceCategory)
router.get("/getPerformanceCategory_Id/:id", getPerformanceCategoryId)
router.post("/postPerformance", postPerformance)
router.put("/putPerformance/:id", putPerformance)
router.delete("/deletePerformance/:id", deletePerformance)
router.post('/auth/login', login)
router.get('/auth/user', getUser)





module.exports = router;