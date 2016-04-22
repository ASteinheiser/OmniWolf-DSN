var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var request = require('request');
var bodyParser = require('body-parser');

var app = express();
var compiler = webpack(config);
var PORT = process.env.PORT || 1337;

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use('/images', express.static('images'));

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

app.listen(PORT, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:' + PORT);
});
