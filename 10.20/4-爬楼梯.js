// 4.写一个函数，假设你正在爬楼梯。需要 n 阶你才能到达楼顶，每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢

//本质是斐波那契数列

var n = 6;
const num = [];
num[0] = 1;
num[1] = 1;
for (let i = 2; i <= n; i++) {
    num[i] = num[i - 1] + num[i - 2];
}
console.log(num[n]);