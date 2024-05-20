const mongoose = require("mongoose")
const env = require("dotenv")
env.config()

const ConnectToMongo = async() =>{
    try{
        await mongoose.connect(process.env.mongoURI)
        console.log("Connected Successfully")
    }
    catch(err){
        console.log("Failed to connect"+err.message)
    }
}

module.exports = ConnectToMongo
