const express = require('express')
var app = express()



app.get('/api/:person/:age', function(req, res){
  var person = req.params.person
  var age = req.params.age
  res.send('person ' + person + ' age ' + age)
  //res.send('Hello World!')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
