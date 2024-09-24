const { Router }  = require("express");
const userRouter = Router();
const { UserModel } = require("../db")
const { z } = require("zod")
const bcrypt = require("bcrypt")

userRouter.post("/signup", async function(req, res) {
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

    const existingUser = await UserModel.findOne({
        email: email
    })

    if(existingUser){
        return res.status(400).json({
            msg: 'User already exists',
        })
    }

    const hash = await bcrypt.hash(password, 7)

    const newUser = await UserModel.create({
        email: email,
        password: hash,
        firstName: firstName,
        lastName: lastName
    })

    if(newUser){
        return res.status(200).json({
            msg: 'User signed up successfully'
        })
    }
})

userRouter.post("/login", async function(req, res) {
    const email = req.body.email
    const password = req.body.password

    const foundEmail = await UserModel.findOne({
        email: email
    })

    if(!foundEmail){
        return res.status(400).json({
            msg: "User does not exist"
        })
    }
    const comparePassword = bcrypt.compare(password, foundEmail.password)
    if (foundEmail){
        //token sign
    }
    else 
        return res.status(404).json({
            msg: "User does not exist"
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