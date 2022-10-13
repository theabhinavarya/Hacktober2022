require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
mongoose.connect("mongodb://localhost:27017/jwtDB");

app.use(express.json());
app.use("/user", authRoute);
app.use("/user", postRoute);

app.listen(3000 || process.env.PORT);
