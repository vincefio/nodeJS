const fs = require('fs')

fs.appendFile('./message.txt', 'test append', function (err, data) {
  if (err) throw err;
  console.log(data);
});

fs.readFile('./message.txt', 'utf-8', function (err, data) {
  if (err) throw err;
  console.log(data);
});
