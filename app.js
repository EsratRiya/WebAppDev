const express = require('express');
require("./config/db");
const bodyParser = require('body-parser');
const productRouter = require("./routes/products.route");

const app = express();

app.use(bodyParser.json());

app.use("/product",productRouter);

// home route
app.get("/", (req,res) => {
    res.sendFile(__dirname + "/views/index.html");
});

// route not found error
app.use((req,res,next) => {
    res.status(404).json({
        message: "Route not found"
    });
});

// server error
app.use((err,req,res,next) => {
    res.status(500).json({
        message: "Something is wrong"
    });
});

module.exports = app;