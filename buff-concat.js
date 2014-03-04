/*
write a program that combines all of the buffers from `process.stdin`
and then writes the single big buffer out to the console.
*/

var list = [], size = 0;

process.stdin.on('data', function(data) {
  list.push(data);
  size += data.length;
});

process.stdin.on('end', function() {
  console.log(Buffer.concat(list, size));
});
