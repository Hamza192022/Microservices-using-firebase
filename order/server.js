const express = require("express");
const app = express();
const port = 8081

app.get("/order-list" , (req,res)=>{
    let response = {
        data :{
            item :[
                {
                    id : 1,
                    name :"oredr 1"
                },
                {
                    id : 2,
                    name :"oredr 2"
                }
            ]
        }

    } 

    res.status(200).json(response)
})

app.get("/", (req, res)=> {
    res.status(200).json({ msg: "order called" })
})

app.listen(port ,()=>{
    console.log(`running at port ${port}`);
})