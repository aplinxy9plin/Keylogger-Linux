var express = require('express')
var app = express()
var fs = require('fs');

app.get('/', (req, res) => {
  var contents = fs.readFileSync('file.log', 'utf8');
  console.log(contents);
  res.send(contents);
})

app.listen(1337)
