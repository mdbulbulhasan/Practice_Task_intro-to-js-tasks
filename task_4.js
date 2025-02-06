/**
 * isNaN() is a JavaScript function that checks if a value is NaN (Not-a-Number). 
 * It returns true if the value is NaN, otherwise false.
 */

console.log(isNaN(123));      // false
console.log(isNaN("hello"));  // true
console.log(isNaN("123"));    // false (because "123" can be converted to a number)
console.log(isNaN(NaN));      // true