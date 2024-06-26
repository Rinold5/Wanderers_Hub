const mongoose = require('mongoose')

const {Schema} = mongoose

const categorySchema = new Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Category",categorySchema)