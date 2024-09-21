const { Router } = require("express")
const courseRouter = Router();
const { CourseModel } = require("../db")

courseRouter.post("/purchase", function(req, res) { //endpoint to make a purchase
    res.json({
        msg : "course purchase endpoint"
    })
})

courseRouter.get("/preview", function(req, res) {
    res.json({
        msg : "course preview endpoint"
    })
})

module.exports = {
    courseRouter: courseRouter
}