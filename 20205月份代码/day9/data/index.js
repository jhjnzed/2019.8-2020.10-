// index.js的作用就是用来处理members.json或者backup.json文件
// 增加 删除 修改 查询 都要用index.js里面的方法来做

// 引入包
const fs = require('fs');
const path = require('path');
const database = require('./backup.json');
// 把方法导出
module.exports = {
  get: () => {
    return database
  },
  getById: (id) => {
    // 数组.find() 遍历数组 找到 某一个元素的id和传入的id一样 就把这个元素返回
    return database.find((item) => {
      // 如果数组的元素中的id和传入的id一样 那么就返回这个元素
      return item.id === id;
    })
    // console.log(info);
  }
}