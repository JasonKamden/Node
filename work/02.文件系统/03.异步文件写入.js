//引入fs模块
var fs = require("fs");


//打开文件
fs.open("hello2.txt", "w", function (err, fd) {
    if (!err) {
        fs.write(fd, "这是异步写入的内容", function () {
            if (!err) {
                console.log("导入成功！");
            }
            fs.close(fd, function (err) {
                if (!err) {
                    console.log("文件已经关闭");
                }
            });
        });
    } else {
        console.log(err);
    };
});


