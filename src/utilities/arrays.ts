// remove the 3rd item from array
const cut3 = (arr: (string | number)[]) => {
    arr.splice(2, 1);
    return arr;
  }

  // find the largest number in an array
const lgNum = (arr: number[]) => {
    let largest = 0;
    arr.forEach((x) => {
      if(x > largest){
        largest = x;
      }
    })
    return largest;
  
  }

  // add the numbers in an array
const addArr = (arr: number[]) => {
    let total = 0;
    arr.forEach((x) => {
      total += x;
    })
    return total
  }

  // concatenate two arrays
  const concatArr = (arr1: (string | number)[], arr2: (string | number)[]) => {
    return [...arr1, ...arr2]
  }

//  module.exports = {cut3, lgNum, addArr, concatArr};

 export default {cut3, lgNum, addArr, concatArr};