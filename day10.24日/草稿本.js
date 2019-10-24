function getDays(year, month, day) {
    let days = day;
    if (month < 2) {
        return days;
    }
    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for (let i = 0; i < month - 1; i++) {
        days += months[i];
    }
    if ((year % 4 === 0 && year % 100 != 0 || year % 400 === 0) && month > 2) {
        days++;
    }
    return days;
}
console.log(getDays(2019, 3, 1));