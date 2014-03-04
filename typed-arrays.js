/*
for this challenge, read the first buffer from process.stdin, copy all bytes into a
Uint8Array and then log out a JSON stringified representation of the typed array.
*/

process.stdin.once('data', function(data) {
  var buf = new ArrayBuffer(data.length);
  var arr = new Uint8Array(buf);
  for(var i = 0; i < arr.length; i++) {
    arr[i] = data[i];
  }
  console.log(JSON.stringify(arr));
})
