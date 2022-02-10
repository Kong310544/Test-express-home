require("dotenv").config({path: './config.env'});

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 4001

const staffRoute = require('./roules/staffRoute');

const app = express();
app.use(cors());
app.use(bodyParser.json());

require("./db")(app);

app.use("/staff",staffRoute);

app.get("/", (req, res)=>{
    res.send("Hello from index");
})

app.listen(port,()=>{
    console.log("App is running on port " + port);
})