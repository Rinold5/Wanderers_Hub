const ConnectToMongo = require("./db")
ConnectToMongo()

const dotenv = require("dotenv")
dotenv.config()

const express = require("express")
const app = express()

app.use(express.json())

app.use("/api/admin",require("./Routes/adminRoutes"))

app.use("/api/booking",require("./Routes/bookingRoutes"))

app.use("/api/categories",require("./Routes/categoriesRoutes"))

app.use("/api/package",require("./Routes/packageRoutes"))

app.use("/api/payment",require("./Routes/paymentRoutes"))

app.use("/api/review",require("./Routes/reviewRoutes"))

app.use("/api/user",require("./Routes/userRoutes"))

app.listen(process.env.PORT, ()=>{
    console.log("Running on port: "+process.env.PORT)
})
