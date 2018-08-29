var express = require('express');
var app = express();

var logger = function(req, res, next){
	console.log('Logging...');
	next();
}

app.use(logger);

app.get('/',function(req,res){
	console.log('Got a GET request for the home page');
	res.send('Home page');
});

app.get('/users',function(req,res){
	console.log('Got a GET request for the users page');
	res.send('Users page');
});

app.get('/*list',function(req,res){
	console.log('Got a GET request for the list');
	res.send('Page listing');
});

app.listen(3523,function(){
	console.log('Server started at port 3523..');
});