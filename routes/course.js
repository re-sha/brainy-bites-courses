const { Router } = require("express")
const courseRouter = Router();
const { CourseModel } = require("../db")

courseRouter.get("/", function(req, res) {
    res.json({
        msg : "All courses endpoint"
    })
})

courseRouter.post("/purchase", function(req, res) { //endpoint to make a purchase
    res.json({
        msg : "courser purchase endpoint"
    })
})

module.exports = {
    courseRouter: courseRouter
}