// 引入util模块
const util = require('util');
const fs = require('fs');
let mineReadFile = util.promisify(fs.readFile);
mineReadFile('./resource/寄扬州韩绰判官.txt').then(value => {
    console.log(value.toString());
})