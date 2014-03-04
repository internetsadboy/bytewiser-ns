/*
write a program that takes the first buffer written to `process.stdin`,
updates all instances of . with ! and then logs out the updated buffer object.
bonus points if you never call `.toString()` on your buffer!
*/

process.stdin.on('data', function(buf) {
  for(var i = 0; i < buf.length; i++) {
    if(buf[i] === 46) {
      buf[i] = 33;
    }
  }
  for(var i = 0; i < buf.length; i++) {
    process.stdout.write(String.fromCharCode(buf[i]))
  }
});
// i like javascript :P
