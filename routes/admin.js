const { Router } = require("express")
const adminRouter = Router();
const { AdminModel} = require("../db")
const {z} = require("zod")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { JWT_ADMIN_PASSWORD } = require("../config")

adminRouter.post("/signup", async function(req, res) {
    const requiredBody = z.object({
        email: z.string().email(),
    password: z.string().min(6,'password must be at least 6 characters').max(14,'Maximum characters allowed is 14'),
    firstName: z.string().min(3).max(10),
    lastName: z.string().min(1).max(10)
    })
    
    const parsedDatawithSuccess = requiredBody.safeParse(req.body)
    
    if(!parsedDatawithSuccess.success) {
        return res.status(400).json({
            error: parsedDatawithSuccess.error
        })
    }

    const { email, password, firstName, lastName } = parsedDatawithSuccess.data

    const existingAdmin = await AdminModel.findOne({
        email: email
    })

    if(existingAdmin){
        return res.status(400).json({
            msg: 'Admin already exists',
        })
    }

    const hash = await bcrypt.hash(password, 7)

    const admin = await AdminModel.create({
        email: email,
        password: hash,
        firstName: firstName,
        lastName: lastName
    })

    if(admin){
        return res.status(200).json({
            msg: 'Admin signed up successfully'
        })
    }
})

adminRouter.post("/login", async function(req, res) {
    const { email, password } = req.body;
    const admin = await AdminModel.findOne({
        email: email
    })

    if(!admin){
        return res.status(400).json({
            msg: "Admin does not exist"
        })
    }

    const comparePassword = await bcrypt.compare(password, admin.password)
    console.log(comparePassword)
    if(!comparePassword){
        return res.status(400).json({
            msg: "Incorrect password"
        })
    }
    const token = jwt.sign({
        id: admin._id
    }, JWT_ADMIN_PASSWORD)
    res.json({
        msg: 'Logged in successfully',
        token: token
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
