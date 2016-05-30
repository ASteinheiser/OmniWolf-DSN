var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var request = require('request');

var app = express();

var port = process.env.port || 80;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/login',function(req,res){
  var formData = {email:req.body.email,password:req.body.password};
  request.post({url:'http://omniwolf.io:1337/sessions', formData: formData}, function optionalCallback(err, httpResponse, body) {
   if (err) {
     res.redirect('/login');
     return
   }
   res.redirect('/dashboard');
  });
});

app.post('/signup',function(req,res){
 var formData = {email:req.body.email,password:req.body.password};
 request.post({url:'http://omniwolf.io:1337/devices', formData: formData}, function optionalCallback(err, httpResponse, body) {
  if (err) {
    res.redirect('/signup');
    return
  }
  res.redirect('/dashboard');
  });

});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(port,function(){
  console.log("Server started on port: ",port);
})
