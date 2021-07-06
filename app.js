/*var a=7
var b=7
var c=a+b


console.log("The Output is "+c)*/
var http = require("http")
http.createServer(function(req,res){
  res.write("Welcome Back Alien..")
  res.end()
}).listen(8080)

/*var calc=require("./calc.js")
result=calc.add(4,5)
console.log("The Result is "+result)

var fs = require("fs")

fs.readFile("calc.js","utf8",function(err,data){
  console.log(data)
})
fs.appendFile("calc.js",'console.log("done")',function(err){
  console.log("Data saved")
})
var fs = require("fs")

fs.unlink("calc1.js",function(err){
  console.log("Deleted")
})
