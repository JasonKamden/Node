var str = "Hello Kamden";
var buf = Buffer.from(str);
console.log(buf);
console.log(str);
console.log(buf.length);
console.log(str.length);
var buf2 = Buffer.alloc(10);
buf2[0] = 88;
buf2[1] = 255;
buf2[2] = 0xaa;
console.log(buf2);

var buf3 = Buffer.allocUnsafe(10);
console.log(buf3);