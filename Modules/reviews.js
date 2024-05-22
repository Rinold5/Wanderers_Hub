const mongoose = require('mongoose')

const {Schema} = mongoose

const reviewSchema = new Schema({
    packageId:{
        type:mongoose.Schema.Types.ObjectID,
	    ref:"Package"
    },
    userId:{
        type:mongoose.Schema.Types.ObjectID,
	    ref:"User"
    },
    reviews:{
        type:String,
        required:true
    },
    ratings:{
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

module.exports = mongoose.model("Review",reviewSchema)