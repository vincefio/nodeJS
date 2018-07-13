var http = require('http')
var fs = require('fs')
var url = require('url')

var PORT = 8080

var server = http.createServer(handleRequest)

function handleRequest(req, res){

  //switch statement
  var urlParts = url.parse(req.url);

  switch(urlParts.pathname){
    case '/songs':
      songs(urlParts.pathname, req, res)
      break;
    case '/bands':
      bands(urlParts.pathname, req, res)
      break;

  }


}

function songs(url, req, res){
  console.log('songs hit')
  fs.readFile(__dirname + '/favSongs.html', function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(data)
  })
}

function bands(url, req, res){
  console.log('bands hit')
  fs.readFile(__dirname + '/favBands.html', function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(data)
  })
}


server.listen(PORT, function(){
  console.log('server listening onn port ' + PORT)
})
