/*
write a node program that takes the following 6 bytes, converts them to a
hexidecimal string using a Buffer and logs them to the console.
0 15 24 3 250 83
*/
var arr = [0,15,24,3,250,83];
console.log(new Buffer(arr).toString('hex'));
