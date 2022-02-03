// remove the 3rd item from array
const cut3 = (arr) => {
    arr.splice(2, 1);
    return arr;
  }

  // find the largest number in an array
const largeNumber = (arr) => {
    let largest = 0;
    arr.forEach((x) => {
      if(x > largest){
        largest = x;
      }
    })
    return largest;
  
  }

  // add the numbers in an array
const addArr = (arr) => {
    const total = 0;
    arr.forEach((x) => {
      total = total + x;
    })
    return total
  }

  // concatenate two arrays
  const concatArr = (arr1, arr2) => {
    return [...arr1, ...arr2]
  }

 module.exports = {cut3, largeNumber, addArr, concatArr};