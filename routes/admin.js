const { Router } = require("express")
const adminRouter = Router();
const { AdminModel} = require("../db")

adminRouter.post("/signup", function(req, res) {
    res.json({
        msg: "sign-up"
    })
})

adminRouter.post("/login", function(req, res) {
    res.json({
        msg: "login"
    })
})

adminRouter.post("/course", function(req, res) {
    res.json({
        msg: "create course endpoint"
    })
})

adminRouter.put("/course", function(req, res) {
    res.json({
        msg: "update course endpoint"  
    })
})

adminRouter.get("/course/bulk", function(req, res) {
    res.json({
        msg: "get all courses endpoint"
    })
})

module.exports = {
    adminRouter: adminRouter
}
