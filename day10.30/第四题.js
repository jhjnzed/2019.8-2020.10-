function printSumIs10MoM(arr) {
    for (let a = 0; a < arr.length; a++) {
        for (let b = a + 1; b < arr.length; b++) {
            if (b == a) {
                continue;

            }
            for (let c = b + 1; c < arr.length; c++) {
                if (c == b && c == a) {
                    continue;
                }

                if ((arr[a] + arr[b] + arr[c]) % 10 == 0) {
                    console.log(`${arr[a]} ${arr[b]} ${arr[c]} 的和是十的倍数。`)

                }
            }
        }
    }
}

var arr = [10, 2, 8, 4, 6];
printSumIs10MoM(arr);