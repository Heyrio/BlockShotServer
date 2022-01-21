const express = require('express');
const cors = require('cors')
const dotenv = require("dotenv")
dotenv.config();

if(!process.env.PORT){
    console.log("Failed to accesss port")
    process.exit(1)
}

const app = express();
const port = process.env.PORT

app.use(cors());


app.listen(process.env.PORT, ()=>{
    console.log("Starting server on port " + port)
})

app.listen()