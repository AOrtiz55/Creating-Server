//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));//alwyas have to type to store inputes

app.get("/", function(req, res){

  res.sendFile(__dirname + "/index.html"); //use this to find file on anyones computer(provides a pth)
});

app.post("/", function(req,res){
var inpute = req.body.multiply;
var num1 = Number(req.body.num1);//num1 in red is the name from index.html
var num2 = Number(req.body.num2);
if(inpute=="multiply"){

  var result = num1 * num2;
}
else{
  var result = num1 + num2;
}

  res.send("Your Result is: "+ result);//this is for posting your answers
});

app.get("/bmi", function(req, res){

  res.sendFile(__dirname + "/bmi.html"); //use this to find file on anyones computer(provides a pth)
});

app.post("/bmi", function(req,res){

  var w = parseFloat(req.body.weight);//num1 in red is the name from index.html
  var h = parseFloat(req.body.height);


  var bmi = Math.round(w/(h*h));
  res.send("Your BMI is: "+ bmi);//this is for posting your answers
});


app.listen(3000, function(){
console.log("Server running on port 3000.");
});
