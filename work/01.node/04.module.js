var a = 10;
/*
(exports, require, module, __filename, __dirname)
exports:该对象用来将变量或函数暴露到外部
require:函数，用来引入外部的模块
module: 代表的是当前的模块本身
        exports就是module的属性
__filename:
__dirname
 */

console.log(global.a);
console.log(arguments.callee + "");
console.log(exports);
console.log(__filename);
console.log(__dirname);
console.log(module.exports == exports);