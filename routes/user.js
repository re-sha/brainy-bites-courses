const { Router }  = require("express")
const userRouter = Router();
const { UserModel } = require("../db")

userRouter.post("/signup", function(req, res) {
    res.json({
        msg : "User sign up endpoint"
    })
})

userRouter.post("/login", function(req, res) {
    res.json({
        msg : "User login endpoint"
    })
})

userRouter.get("/purchases", function(req, res) { //endpoint to see all purchased courses
    res.json({
        msg : "All User purchases endpoint"
    })
})

module.exports = {
    userRouter: userRouter
}