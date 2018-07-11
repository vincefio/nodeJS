var http = require('http')

var PORT = 8080
var PORT2 = 20000

function handleRequest(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
  console.log('listening on port ' + PORT)
})

server.listen(PORT2, function(){
  console.log('listening on port ' + PORT2)
})
