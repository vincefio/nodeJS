var url = require('url')
var http = require('http')

var PORT = 8080

var server = http.createServer(handleRequest)

server.listen(PORT, function(){
  console.log('listening on port ' + PORTs)
})
