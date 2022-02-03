// add numbers in an array
const sum = (arr) => {
    const total = 0;
    arr.forEach((x) => {
      total += x;
    });
    return total
  }

  // multiply two numbers
  const multiply = (x, y) => {
      const result = x * y;
      return result;
  }

  module.exports = {sum, multiply};