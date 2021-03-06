const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./roots/user");
const authRoute = require("./roots/auth");
const productRoute = require("./roots/product");
const cartRoute = require("./roots/cart");
const orderRoute = require("./roots/order");

app.use(express.json())
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/orders", orderRoute);

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL
).then(() => console.log("DB connection successful"))
.catch(er => console.log(er));


app.listen(process.env.PORT || 5000, ()=> {
    console.log("backend server is running");
});
