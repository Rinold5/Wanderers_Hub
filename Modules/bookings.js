const mongoose = require('mongoose')

const {Schema} = mongoose

const bookingSchema = new Schema({
    packageId:{
        type:mongoose.Schema.Types.ObjectID,
	    ref:"Package"
    },
    userId:{
        type:mongoose.Schema.Types.ObjectID,
	    ref:"User"
    },
    noOfPeople:{
        type:Number,
        required:true
    },
    amount:{
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

module.exports = mongoose.model("Booking",bookingSchema)