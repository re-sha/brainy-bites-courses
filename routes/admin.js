const { Router } = require("express")
const adminRouter = Router();
const { AdminModel} = require("../db")

adminRouter.post("/admin/signup", function(req, res) {

})

adminRouter.post("/admin/login", function(req, res) {
    
})

adminRouter.post("/admin/create", function(req, res) {
    
})

adminRouter.delete("", function(req, res) {
    
})

adminRouter.patch("/admin/course", function(req, res) {
    
})

module.exports = {
    adminRouter: adminRouter
}
