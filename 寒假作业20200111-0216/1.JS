function fn(Str) {
        let Arr = Str.split(" ").reverse();
        for (let Strings in Arr) {
            Strings.split('').reverse().join('');
        }
        let result = Arr.join('');
        return result;
    }