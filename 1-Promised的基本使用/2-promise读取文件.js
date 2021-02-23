const fs = require('fs');
const { resolve } = require('path');

// 回调函数的方法
// fs.readFile('./resource/寄扬州韩绰判官.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// })

// 封装成Promise对象
const p = new Promise((resolve, reject) => {
    fs.readFile('./resource/寄扬州韩绰判官.txt', (err, data) => {
        if (err) reject(err);
        resolve(data)
    })
})
p.then(data => {
    console.log(data.toString())
}, (err) => {
    console.log(err);
})
