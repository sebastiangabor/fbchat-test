var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));


app.get('/hello', function() {
  res.send("world");

})

// respond with "hello world" when a GET request is made to the homepage
app.post('/webhook', function (req, res) {
  res.send('hello world');
})

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
