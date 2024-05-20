const ConnectToMongo = require("./db")
ConnectToMongo()

const dotenv = require("dotenv")
dotenv.config()

const express = require("express")
const app = express()

app.use(express.json())

app.listen(process.env.PORT, ()=>{
    console.log("Running on port: "+process.env.PORT)
})
