var formidable = require('formidable'),
    http = require('http'),
    util = require('util');
var fs = require('fs')

http.createServer(function(req, res) {
  if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
    // parse a file upload
    var form = new formidable.IncomingForm();

    form.parse(req)

    form.on('fileBegin', function (name, file){
        file.path = __dirname + '/uploads/' + file.name;
    });

    form.on('file', function (name, file){
        console.log('Uploaded ' + file.name);
    });

    res.sendFile(__dirname + '/index.html');

        /*var oldpath = files.filetoupload.path;
           var newpath = 'C:/Users/Your Name/' + files.filetoupload.name;
           fs.rename(oldpath, newpath, function (err) {
             if (err) throw err;
             res.write('File uploaded and moved!');
             res.end();
           });
           res.writeHead(200, {'content-type': 'text/plain'});
   res.write('received upload:\n\n');
   res.end(util.inspect({fields: fields, files: files}));*/


    return;
  }

  // show a file upload form
  res.writeHead(200, {'content-type': 'text/html'});
  res.end(
    '<form action="/upload" enctype="multipart/form-data" method="post">'+
    '<input type="text" name="title"><br>'+
    '<input type="file" name="upload" multiple="multiple"><br>'+
    '<input type="submit" value="Upload">'+
    '</form>'
  );
}).listen(8080);
