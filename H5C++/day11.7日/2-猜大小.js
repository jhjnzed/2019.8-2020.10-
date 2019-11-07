// 2. 若用户猜的小于50，提示：猜小了；否则提示猜大了；猜中了，提示：中奖了(不能继续猜谜)，(用while实现)

let x = 56;
let i = 0;
while (i <= 50) {
  if (x == i) {
    console.log('猜对了')
  } else if (x >= i) {
    console.log('猜大了')
  } else if (x <= i) {
    console.log('猜小了')
  }


  i++;
  break;
}