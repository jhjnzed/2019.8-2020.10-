function fn(Str) {
        let countUpperCase = 0;
        let countLowerCase = 0;
        let newStr = '';
        for (let i in Str) {
            if (Str[i].charCodeAt() >= 65 || Str[i].charCodeAt() <= 90) {
                newStr += Str[i].toLowerCase();
                countLowerCase++;
            }
            if (Str[i].charCodeAt() >= 97 || Str[i].charCodeAt() <= 122) {
                newStr += Str[i].toUpperCase();
                countUpperCase++;
            }
        }
        console.log(countLowerCase, countUpperCase);
        return newStr;
    }