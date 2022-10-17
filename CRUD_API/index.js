const express=require('express')
const cors=require('cors')
const bodyParser = require('body-parser')
const mongoose=require('mongoose')
const app=express();


// mongodb credensial


const db=mongoose.connection

db.on('open',()=>{
    console.log("connected")
})
db.on("error",()=>{
    console.log("dis-connected")
})

app.use(cors({
    origin:'*'
}))

app.use(bodyParser.json());

require("./app/Routes/tutorial.route")(app)


const PORT = 3000;

app.listen(PORT,()=>{
    console.log("Server is running on port "+PORT);
})