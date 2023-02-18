const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;


const app = express ();


//  moddleware
app.use(cors());
app.use(express.json());


// server testing 
app.get("/", (req,res)=>{
    res.send("E-commers  server is running")
})

app.listen(port,()=>{
    console.log(`E-commers side is running on port ${port}`);
})
