const express = require('express')
var app = express()
var path = require('path')

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, "view.html"));
})

app.get('/api/:person/:age', function(req, res){
  var person = req.params.person
  var age = req.params.age
  res.send('person ' + person + ' age ' + age)
  //res.send('Hello World!')
})

//post request
app.post("/api/new", function(req, res) {
  res.send('get ready for post!')
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
