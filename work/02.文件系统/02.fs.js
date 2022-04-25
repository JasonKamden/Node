//引入fs模块
const fs = require("fs");

//打开文件
var fd = fs.openSync("hello.txt", "w");

//向文件钟写入内容
fs.writeSync(fd, "今天天气真不错！", 20);

//关闭
fs.closeSync(fd);
