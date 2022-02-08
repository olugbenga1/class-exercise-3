"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// add numbers in an array
var sum = function (num1, num2) {
    return num1 + num2;
};
// multiply two numbers
var multiply = function (x, y) {
    var result = x * y;
    return result;
};
// module.exports = {sum, multiply};
exports.default = { sum: sum, multiply: multiply };
