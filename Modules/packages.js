const mongoose = require('mongoose')

const {Schema} = mongoose

const packageSchema = new Schema({
    categoryId:{
        type:mongoose.Schema.Types.ObjectID,
	    ref:"Category"
    },
    packageName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    prices:{
        type:Number,
        required:true
    },
    days:{
        type:Number,
        required:true
    },
    images:{
        type:String,
        required:true
    },
    noOfPeople:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Package",packageSchema)