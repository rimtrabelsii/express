const express=require("express");
const productRouter=express.Router();




//add product





//get product
productRouter.get("/",(req,res)=>res.send("i'm a new product"));

//delete product


//update product
 module.exports = productRouter ;