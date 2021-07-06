const express=require("express");

const exp = express();
exp.get("/",function(req,res){
  res.send("Hello..")
})
exp.get("/alien",function(req,res){
  res.send("Welcome Alien..")
})

exp.get("/alien/20")
exp.listen(9000,function(req,res){
  console.log("Running..")
});
