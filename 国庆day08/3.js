

// // 63.开发一个标题为“ FlipFlop”的游戏应用程序。它从 1 计数到100 ，遇到3的倍数输出单词“ Flip”，遇到5的倍数就输出单词“Flop”，遇到即使 3 又是 5 的倍数时则输出单词“ FlipFlop” ，其余情况下输出当前数字



for (var i=1;i<=100;i++){
    if (i%3==0&&i%5==0) {
        console.log('FlipFlop');
    }else if (i%3==0) {
        console.log('Flip');
    }else if (i%5==0) {
        console.log('Flop');
    }else {
        console.log(i);
    }
}
