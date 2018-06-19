const fs = require('fs')

fs.writeFile('message.txt', 'Hello Nodess', function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});
