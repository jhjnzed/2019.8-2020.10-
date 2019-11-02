// 9. 分数转换,给一个分数，判定等级。大于等于90  A，大于等于80小于90  B，大于等于70小于80  C ，大于等于60小于70 D，小于60 E



let sorce = '5s';


if (sorce >= 90) {
    console.log('A')
} else if (sorce < 90 && sorce >= 80) {
    console.log('B')
} else if (sorce < 80 && sorce >= 70) {
    console.log('C')
} else if (sorce < 70 && sorce >= 60) {
    console.log('D')
} else if (sorce < 60) {
    console.log('E')
} else {
    console.log('您输入的东西很适合搬砖哟')
}