const express=require("express");

const userRouter=express.Router();



//add user 


// userRouter.post("/add",(req,res)=>{
//     const email =req.body.email;
//     const password=req.body.password;
//     res.send(`my email is ${email} and my password is ${password}`)
// })


//get user 
userRouter.get("/store",async(req,res)=>{
    const date=new Date ();
    const hours=date.getHours();
    if (hours>8 && hours<18) {
        res.render("opened")
    }
    else { res.render("closed")}
});


//delete user


//update user 

module.exports= userRouter;

