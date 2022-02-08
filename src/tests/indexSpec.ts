import arrays from '../utilities/arrays';
import numbers from '../utilities/numbers';
import strings from '../utilities/strings';

describe('Suite description for Arrays', () => {
  it('describes the test', () => {
    expect(arrays.cut3([])).toBeInstanceOf(Array);
    expect(arrays.cut3([1, 2, 3, 4])).toEqual([1, 2, 4]);
  });
  it('describe the return of the concatArr', () => {
    expect(arrays.concatArr([], [])).toBeInstanceOf(Array);
    expect(arrays.concatArr([1], [2])).toEqual([1, 2]);
  });
  it('describe the recived and return type of addArr', () => {
    expect(arrays.addArr([])).toBeInstanceOf(Number);
    expect(arrays.addArr([2, 5, 1, 3])).toBe(11);
  });
  it('decribe  the return type for large numbers', () => {
    expect(arrays.lgNum([])).toBeInstanceOf(Number);
    expect(arrays.lgNum([])).toBeGreaterThanOrEqual(0);
    expect(arrays.lgNum([1])).toBeTruthy();
  });
});

describe('Suite Description for Numbers', () => {
  it('describe the return type for sum', () => {
    expect(numbers.sum(1, 1)).toBe(2);
    expect(numbers.multiply(2, 1)).toBeInstanceOf(Number);
  });
  it('describe the return type for mutiply', () => {
    expect(numbers.multiply(3, 3)).toEqual(9);
    expect(numbers.multiply(3, 3)).toBeInstanceOf(Number);
  });
});

describe('Suite Description for Strings', () => {
  it('describe the return type for capitalize', () => {
    expect(strings.capitalize('Apple')).toBeInstanceOf(String);
  });
});

