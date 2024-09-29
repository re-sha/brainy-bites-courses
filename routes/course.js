const { Router } = require("express")
const courseRouter = Router();
const { CourseModel, PurchaseModel } = require("../db")
const { userMiddleware } = require("../middleware/user")

courseRouter.post("/purchase", userMiddleware, async function(req, res) { //endpoint to make a purchase
    const userId = req.userId;
    const courseId = req.body.courseId;
    
    await PurchaseModel.create({
        userId,
        courseId
    })
    res.json({
        msg: 'Course purchased successfully'
    })
})

courseRouter.get("/preview", async function(req, res) {
    const courses = await CourseModel.find({})
    res.json({
        courses
    })
})

module.exports = {
    courseRouter: courseRouter
}