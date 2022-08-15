var express=require('express');
var app=express();
var fs=require('fs');
const tesseract = require("node-tesseract-ocr");
const { domainToASCII } = require('url');

const config = {
  lang: "eng",
  oem: 1,
  psm: 3,
};
 
tesseract
  .recognize("image.png")
  .then((text) => {
    console.log("Result:", text);
  })
  .catch((error) => {
    console.log(error.message);
  });

app.get('/text',function(req,req){
  fs.readfile(__dirname+'/'+'docs.json','utf8',function(err,data){
    console.log(data);
    req.end(data);
  });
})

var server=app.listen(8080,function(){
  var host=server.address().address
  var port=server.address().port
  console.log("REST API https:http://http://127.0.0.1:8080/")
})