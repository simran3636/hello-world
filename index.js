var express = require('express');

var app     = express();

 

app.get('/', function(req, res){

  res.send('Hello World');

});

app.get('/:name', function(req, res){

  res.send('Hello '+ req.params.name);

});

 

var server = app.listen(3000, '0.0.0.0', function() {

  console.log('Listening on port %d', server.address().port);

});