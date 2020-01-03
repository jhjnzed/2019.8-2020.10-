var people1 = {
    age: 22,
    StuID: 110,
    name: '水狗',
    height: '2.2m',
    zhong: '235kg',
    phone: 10086
};


var people2 = {
    age: 45,
    StuID: 119,
    name: '乡巴佬',
    height: '1.65m',
    zhong: '180kg',
    phone: 10010
};
var people3 = {
    age: 33,
    StuID: 120,
    name: '狂犬',
    height: '1.1m',
    zhong: '50kg',
    phone: 10001
};


// 通过2种方式给对象添加一个属性 gender,值是"男"
people1.gender = '男';
people2[gender] = '男';
people3.gender = '男';
console.log(people1,people2,people3);
console.log(people1.name, people1.age,people3.name, people3.age,people2.name, people2.age,);

delete people1.zhong
delete people3.zhong
delete people2.zhong