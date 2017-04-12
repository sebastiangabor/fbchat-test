var express = require('express')
var app = express()

app.get('/hello', function() {
  res.send("world");

})

// respond with "hello world" when a GET request is made to the homepage
app.post('/webhook', function (req, res) {
  res.send('hello world');
})
