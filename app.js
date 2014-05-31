
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var fs = require('fs');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

app.get('/howitworks', function(req,res) {
	res.render('howitworks', { a : 'active'})
})

app.get('/authorsignup', function(req, res) {
	res.render('authorsignup', { b : 'active'})
})

app.get('/readersignup', function(req, res) {
	res.render('readersignup', { c : 'active'})
})

app.get('/comingsoon', function(req, res) {
	res.render('comingsoon', { d : 'active'})
})

app.post('/formsubmit', function(req, res) {
	res.render('thankyou');
	var userData = JSON.stringify(req.body);
	fs.writeFile('myuserdata.txt', userData);
});

// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
