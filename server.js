var express = require("express");

 var app = express();
var artists = [
  {
    "id" : 1,
    "name" : "Eminem"
  },
  {
    "id" : 2,
    "name" : "Akon"
  },
  {
    "id" : 3,
    "name" : "Metalica"
  }
];
 app.get("/", function(req, res){
   res.send("Hello");
 });

 app.get("/artists", function(req, res){
   res.send(artists);
 });

 app.get("/artists/:id", function(req, res){
   var artist = artists.find(function(artist){
     return artist.id === Number(req.params.id)
   })
   res.send(artist);
 });

app.listen(3000, function(){
  console.log("Api started");
})
