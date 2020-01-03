// 44.定义一个人的对象，有name,age,gender,height等属性，
// 要求：1)获取name的值
// 2)	通过2种方式给对象添加一个新的属性weight,值自己写
// 3)	删除属性名height



var arr={
    name:'zs',
    age:28,
    gender:'男',
    height:180
}
console.log(arr.name);
arr.weught='80KG'

var attrName = 'weught';
arr[attrName]='160KG';


delete arr.height;

console.log(arr);
