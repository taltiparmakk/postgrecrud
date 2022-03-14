const express = require("express");
const postgresClient = require("./config/db")
const userRouter = require("./router/userRouter")

const app = express();
app.use(express.json());

app.use('/users', userRouter)


const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> {
    console.log(`listening on port ${5000}`)
    postgresClient.connect(err => {
        if(err){
        console.log("connection error", err.stack)
    }else {
            console.log("db connection succesful")
        }
    })
})