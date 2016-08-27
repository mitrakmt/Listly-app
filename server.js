var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);

http.listen(PORT, function () {
  console.log("Server started!");
});
