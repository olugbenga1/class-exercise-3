"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_1 = __importDefault(require("../utilities/arrays"));
var numbers_1 = __importDefault(require("../utilities/numbers"));
var strings_1 = __importDefault(require("../utilities/strings"));
describe('Suite description for Arrays', function () {
    it('describes the test', function () {
        expect(arrays_1.default.cut3([])).toBeInstanceOf(Array);
        expect(arrays_1.default.cut3([1, 2, 3, 4])).toEqual([1, 2, 4]);
    });
    it('describe the return of the concatArr', function () {
        expect(arrays_1.default.concatArr([], [])).toBeInstanceOf(Array);
        expect(arrays_1.default.concatArr([1], [2])).toEqual([1, 2]);
    });
    it('describe the recived and return type of addArr', function () {
        expect(arrays_1.default.addArr([])).toBeInstanceOf(Number);
        expect(arrays_1.default.addArr([2, 5, 1, 3])).toBe(11);
    });
    it('decribe  the return type for large numbers', function () {
        expect(arrays_1.default.lgNum([])).toBeInstanceOf(Number);
        expect(arrays_1.default.lgNum([])).toBeGreaterThanOrEqual(0);
        expect(arrays_1.default.lgNum([1])).toBeTruthy();
    });
});
describe('Suite Description for Numbers', function () {
    it('describe the return type for sum', function () {
        expect(numbers_1.default.sum(1, 1)).toBe(2);
        expect(numbers_1.default.multiply(2, 1)).toBeInstanceOf(Number);
    });
    it('describe the return type for mutiply', function () {
        expect(numbers_1.default.multiply(3, 3)).toEqual(9);
        expect(numbers_1.default.multiply(3, 3)).toBeInstanceOf(Number);
    });
});
describe('Suite Description for Strings', function () {
    it('describe the return type for capitalize', function () {
        expect(strings_1.default.capitalize('Apple')).toBeInstanceOf(String);
    });
});
