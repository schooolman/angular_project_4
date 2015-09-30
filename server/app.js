var express = require('express');

var app = express();

var nounList = require('../models/nouns.json');

var adjectiveList = require('../models/adjectives.json');

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response){
    console.log("hit and empty route");
    response.sendFile(__dirname + '/public/views/index.html');
});

app.get('/nounList', function(request, response){

    response.send(nounList);
    //console.log(response);
})

app.get('/adjectiveList', function(request, response){
    response.send(adjectiveList);
    //console.log(response);
})


var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log("Listening on port: " + port);
})