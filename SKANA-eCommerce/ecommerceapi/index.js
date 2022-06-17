const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./roots/user");
const authRoute = require("./roots/auth");

app.use(express.json())
app.use("/api/user", userRoute)
app.use("/api/auth", authRoute)

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL
).then(() => console.log("DB connection successful"))
.catch(er => console.log(er));


app.listen(process.env.PORT || 5000, ()=> {
    console.log("backend server is running");
});
