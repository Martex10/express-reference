 const express = require("express");
 const app = express();
 
 
 // "/" => "HI THERE!"
 app.get("/", function(req, res){
     res.send("HI THERE!");
 });
 // "/bye" => "GOOD BYE!"
 app.get("/bye", function(req, res){
  res.send("BYE!");
 });
 // "/dog" => "MEOW!"
 app.get("/dog", function(req, res){
  console.log("some one made a request to /dog");
  res.send("MEOW!");
 })
 //rout variable
 app.get("/r/:subRedditName", function(req, res){
  let subreddit = req.params.subRedditName;
  res.send("welcome to the " + subreddit.toUpperCase() + " subredit");
 })
 
  app.get("/r/:subRedditName/comments/:id/:title", function(req, res){
  console.log(req.params);
  res.send("welcome to a subredit");
 })
 // when some one accesses a rout not specified
  app.get("*", function(req, res){
  res.send("You Are A Star!");
 })

 //Tell Express to listen (start server)
 app.listen(process.env.PORT, process.env.IP, function(){
     console.log("SERVER HAS STARTED!!!");
 });
 