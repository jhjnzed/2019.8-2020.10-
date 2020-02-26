function fn(min, max) {
    function Method(Num) {
        if (Num % 2 == 0) {
            return false;
        }
        return true;
    }
    if (min >= 10 || max >= 10) {
        return -1;
    }
    let getTemp = [];
    for (let i = min; i <= max; i++) {
        for (let j = min; j <= max; j++) {
            let Num = Number;
            Num = i * 10 + j;
            if (Method(Num)) {
                getTemp.push(Num);
            }
            Num = j * 10 + i;
            if (Method(Num)) {
                getTemp.push(Num);
            }
        }
    }
    let getArr = Array.from(new Set(getTemp));
    return getArr;
}
fn(10, 100)