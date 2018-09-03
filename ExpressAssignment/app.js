const express = require("express");
const app = express();
// when you get to home page
app.get("/", function(req, res){
   res.send("Hi there welcome to my assignment!"); 
});
// find animal and there sound when this page is visited
app.get("/speak/:animalName", function(req, res){
    //get animal's name and makes lower case so that it matches animal obj
    let animalName = req.params.animalName.toLowerCase();
    //animal object holding animals and sounds 
    const animal = {
    pig: 'Oink',
    dog: 'Woof Woof',
    cow: 'Moo',
    dragon: 'Grwrarah',
    spirit: 'Woo HAHaa'
    };
    // checking if aminal is in animal object
    if(!animal[`${animalName}`]){
        res.send("Sorry this " + animalName + "'s sound cannot be found");
    } else {
        //respond with object coresponidng to correct animal
        res.send(`The ${animalName} says '` + animal[`${animalName}`] + "'");
    }
});
//grab a phrase that will be repeated
app.get("/repeat/:phrase/:number", function(req, res){
    //grab the phase to repeat
   let phrase = req.params.phrase;  
   //number of time 
   let number = Number(req.params.number);
   
   const createContent = (a, b) => {
        let str = "";
        for(let i = 0; i < b; i++){
            str += `${a} `;
        }
        return str.trim();
   };
  res.send('"' + createContent(phrase, number) + '"');
});
// if wrong route is visted
app.get("*", function(req, res){
   res.send("Sorry, page not found... What are you doing with your life?") ;
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER HAS STARTED!!!");
});