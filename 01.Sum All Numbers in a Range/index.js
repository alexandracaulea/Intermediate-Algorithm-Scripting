"use strict";
function sumAll(arr) {
    var minVal = Math.min.apply(Math, arr);
    var maxVal = Math.max.apply(Math, arr);
    var sum = 0;
    for (var i = minVal; i <= maxVal; i++) {
        sum += i;
    }
    return sum;
}
module.exports = sumAll;
//# sourceMappingURL=index.js.map