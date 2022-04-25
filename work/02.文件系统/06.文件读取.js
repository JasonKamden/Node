var fs = require("fs");
fs.readFile("hello3.txt", function (err, data) {
    if (!err) {
        //console.log(data.toString());
        fs.writeFile("hello.jpg", data, function (err) {
            if (!err) {
                console.log("文件写入成功");
            }
        });
    }
});