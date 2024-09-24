const express = require("express")
const mongoose = require("mongoose")

const { userRouter } = require("./routes/user")
const { courseRouter } = require("./routes/course")
const { adminRouter } = require("./routes/admin")
const app = express()

app.use(express.json())

app.use("/api/v1/user", userRouter)
app.use("/api/v1/course", courseRouter)
app.use("/api/v1/admin", adminRouter)

async function connectToDB(){
    try{

        //todo : dotenv
        const response = await mongoose.connect("mongodb+srv://admin:V9sy6pcZGHFuFoQO@cluster0.bpeos.mongodb.net/course-app");
        if(response) {
            console.log("Connected to DB successfully")
        }
        app.listen(3000, ()=> {
            console.log("Server running at http://localhost:3000")
        })
    }
    catch(e){
        console.log("Could not connect due to", e)
    }
}

connectToDB();

