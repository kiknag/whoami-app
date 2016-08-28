var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'pug');
app.set('views', 'views');

app.get('/', (req, res)=> {
  var userIP = req.ip;
  var userOS = req.headers['user-agent'];
  res.render('index', {ip : userIP, os : userOS});
});

app.listen(3000, ()=> {
  console.log('Server is running on port 3000');
});
