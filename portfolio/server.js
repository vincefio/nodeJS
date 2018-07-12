var url = require('url')
var http = require('http')

var PORT = 8080

var server = http.createServer(handleRequest)

server.listen(PORT, function(){
  console.log('listening on port ' + PORT)
})

function handleRequest(req, res){
  console.log('handling requst')
//  console.log(req)
  var urlParts = url.parse(req.url);
  console.log(urlParts.pathname)


  switch(urlParts){
    case '/':
      displayRoot(urlParts.pathname, req, res)
      break;
    case '/nothome':

    var myHTML = "<html>";
    myHTML += "<body><h1>you are not home</h1>";
    myHTML += "<a href='/portfolio'>Portfolio</a>";
    myHTML += "</body></html>";
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(myHTML);
      break;
    default:
      var myHTML = "<html>";
      myHTML += "<body><h1>Home Page</h1>";
      myHTML += "<a href='/portfolio'>Portfolio</a>";
      myHTML += "</body></html>";
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(myHTML);
  }
}

function displayRoot(url, req, res) {
  var myHTML = "<html>";
  myHTML += "<body><h1>Home Page</h1>";
  myHTML += "<a href='/portfolio'>Portfolio</a>";
  myHTML += "</body></html>";
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(myHTML);
}
