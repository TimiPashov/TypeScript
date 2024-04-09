"use strict";
function dayOfWeek(day) {
    let weekDays;
    (function (weekDays) {
        weekDays[weekDays["Monday"] = 1] = "Monday";
        weekDays[weekDays["Tuesday"] = 2] = "Tuesday";
        weekDays[weekDays["Wednesday"] = 3] = "Wednesday";
        weekDays[weekDays["Thursday"] = 4] = "Thursday";
        weekDays[weekDays["Friday"] = 5] = "Friday";
        weekDays[weekDays["Saturday"] = 6] = "Saturday";
        weekDays[weekDays["Sunday"] = 7] = "Sunday";
    })(weekDays || (weekDays = {}));
    const i = weekDays[day];
    if (i !== undefined) {
        return i;
    }
    else {
        return 'error';
    }
}
console.log(dayOfWeek('Sunday'));
//# sourceMappingURL=dayOfWeek.js.map