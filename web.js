var express = require("express");

var app = express();

app.configure(function() {
  app.use(express.static(__dirname + '/public'));
});

var port = process.env.PORT || 3000;
console.log('Port ' + port);
app.listen(port);
