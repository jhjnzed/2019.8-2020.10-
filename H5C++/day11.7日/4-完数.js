// 4.一个数如果恰好等于它的因子之和，这个数就称为 "完数 "。 例如6=1＋2＋3.编程 找出100以内的所有完数；


var x = 100;

for (var i = 1; i <= 100; i++) {
  if (x % i == 0) {
    console.log(i)
  }
}

