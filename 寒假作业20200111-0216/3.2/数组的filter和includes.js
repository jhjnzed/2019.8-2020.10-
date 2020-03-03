// filter  数组的方法 ， result结果是一个新数组,filter 为数组中的每个元素调用一次 callback 函数，
// 并利用所有使得 callback 返回 true 或等价于 true 的值的元素创建一个新数组
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// callback意思就是回调函数的意思
// 回调函数就是把一个函数当作另一个函数的实参传递给函数
const result = words.filter(function(word){  // word是数组里面的每一项
  return word.length > 6   // true
} )

console.log(result); // ["exuberant", "destruction", "present"]



// includes  查看某个元素是否存在于这个数组中，如果有结果就是true,否则就是false

[1, 2, 3].includes(2)     // true
[1, 2, 3].includes(4)     // false



// function getAll (num1){
//     num1();
// }

// // getAll([1,2,3])
// // getAll({})
// getAll(function(){})