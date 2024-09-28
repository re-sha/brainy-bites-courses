const { Router } = require("express")
const courseRouter = Router();
const { CourseModel } = require("../db")

courseRouter.post("/purchase", function(req, res) { //endpoint to make a purchase
    res.json({
        msg : "course purchase endpoint"
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