var fs = require("fs");

var isExists = fs.existsSync("abc.mp3");
console.log(isExists);
fs.stat("28.jpg", function (err,stat) {
    console.log(stat.isFile());
});

//fs.unlink("copy2.jpg");
fs.readdir(".", function (err, files) {
    if (!err) {
        console.log(files)
    }
});

//fs.truncateSync("hello.txt", 3);
//fs.mkdirSync("hello");
//fs.rmdirSync("hello");

fs.rename("hello", "zhong", function (err) {
    if (!err) {
        console.log("修改成功");
    }
});

fs.watchFile("hello2.txt", function (curr, prev) {

    console.log("修改前文件的大小" + prev.size);
    console.log("修改后文件的大小" + curr.size);
});