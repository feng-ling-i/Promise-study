// 封装一个函数minReadFile读取文件内容
// 参数：path文件路径

const { rejects } = require('assert');
const { resolve } = require('path');

// 返回promise对象
function mineReadFile(path) {
    return new Promise((resolve, reject) => {
        require('fs').readFile(path, (err, data) => {
            if (err) reject(err);
            resolve(data);

        });
    });
}
mineReadFile('./resource/寄扬州韩绰判官.txt')
    .then(value => {
        console.log(value.toString());
    }, reason => {
        console.log(reason);
    })