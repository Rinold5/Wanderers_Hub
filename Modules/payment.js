const mongoose = require('mongoose')

const {Schema} = mongoose

const paymentSchema = new Schema({
    packageId:{
        type:mongoose.Schema.Types.ObjectID,
	    ref:"Package"
    },
    userId:{
        type:mongoose.Schema.Types.ObjectID,
	    ref:"User"
    },
    bookingId:{
        type:mongoose.Schema.Types.ObjectID,
	    ref:"Booking"
    },
    paymentType:{
        type:String,
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

module.exports = mongoose.model("Payment",paymentSchema)