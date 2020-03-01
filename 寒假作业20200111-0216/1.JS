function fn() {
        function getUser() {
            //定义方法 接受用户输入数据
            let Temp = [];
            //定义数组 存放用户输入数据
            for (let i = 0; i < 5; i++) {
                let userEnter = prompt(i + 'Times Entered');
                //输入框信息提示第I次输入
                Temp.push(userEnter);
                //存储用户输入数据
            }
            return Temp;
            //内置函数闭包
        }
        //----
        function getInfo(Arr, Num) {
            //定义getInfo方法
            let register = 0;
            //定义计数器
            function isOdd(Num) {
                //定义方法用于检测偶数
                if (Num % 2 == 0) {
                    return true;
                }
                return false;
            }
            //----
            for (let i in Arr) {
                //遍历数组
                if (i < Num && isOdd(i)) {
                    register++;
                    //判断，若匹配规则，则计数器自增
                }
            }
            return register;
    }
    // ----
    let UserEnter = getUser();
    //调用方法，接收返回值
    let getNum = prompt('Enter the Number');
    //接收用户输入数据
    let count = getInfo(UserEnter, getNum);
    return count;
    //返回结果.
}