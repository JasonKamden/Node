var fs = require("fs");
var rs = fs.createReadStream("28.jpg");
var ws = fs.createWriteStream("copy2.jpg");
rs.once("open", function () {
    console.log("可读流打开了");
});
rs.once("close", function () {
    console.log("可读流关闭")
    ws.end();
});

ws.once("open", function () {
    console.log("可读流打开了");
});
ws.once("close", function () {
    console.log("可读流关闭")
});
rs.pipe(ws);