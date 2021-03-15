"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumAll(arr) {
    const minVal = Math.min(...arr);
    const maxVal = Math.max(...arr);
    let sum = 0;
    for (let i = minVal; i <= maxVal; i++) {
        sum += i;
    }
    return sum;
}
exports.default = sumAll;
//# sourceMappingURL=sum-all-numbers-in-a-string.js.map