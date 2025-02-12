// // ! Why would we do something without initializing it as a variable?

// function divide(a, b) {
//   a / b; // missing a return keyword
//   return a / b;
// }

// const divisionResult = divide(100, 4);

// /* if the return keyword is omitted
//     function by default returns undefined */

// console.log(divisionResult); // ==> undefined

// TODO: Make my first function - Kimchi Calculator

function makeKimchi(cabbage) {
  const sugarAmount = (cabbage / 10) * 2;
  return sugarAmount;
}

console.log(makeKimchi(10));
