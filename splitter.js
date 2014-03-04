/*
the argument given to you from `process.argv[2]` will be a path to a file.
ead this file and split it by newline characters ('\n'). You should log one Buffer per line.
bonus points if you never use `.toString()`.
buffers have a `.slice` method that can be used to grab a sub-selection as a view (no memcpy).
extra bonus points if you avoid using fs.readFileSync.
*/

var fs = require('fs');
fs.readFile(process.argv[2], function(err, data) {
  if(err) throw err;
  var offset = 0;
  for(var i = 0; i < data.length; i++) {
    if(data[i] === 10) {
      console.log(data.slice(offset,i));
      i++;
      offset = i;
    }
  }
  console.log(data.slice(offset,i));
})
