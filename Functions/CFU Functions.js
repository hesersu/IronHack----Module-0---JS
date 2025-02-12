// // Exercise 1: Dog Years Converter

// function convertDogYears(dogYears) {
//   const humanYears = dogYears * 7;
//   return humanYears;
// }

// console.log(convertDogYears(11));

// // Exercise 2: Currency Converter

// function convertDollarsToEuros(dollarAmount) {
//   const eurosAmountNotRounded = dollarAmount * 0.92;
//   const eurosAmountRounded = Math.round(eurosAmountNotRounded);
//   return eurosAmountRounded;
// }

// console.log(convertDollarsToEuros(115));

// // Exercise 3: Bootcamp Finder

// function findBootCamp(country) {
//   if (country === "USA") {
//     console.log("Miami campus");
//   } else if (country === "France") {
//     console.log("Paris campus");
//   } else if (country === "Germany") {
//     console.log("Berlin Campus");
//   } else {
//     console.log("Remote");
//   }
// }

// findBootCamp("France");

// // Exercise 4: Get Discout

// function getDiscountInfo(employeeType) {
//   if (employeeType === "part-time") {
//     console.log("10% discount");
//   } else if (employeeType === "full-time") {
//     console.log("20% discount");
//   } else if (employeeType === "manager") {
//     console.log("30% discount");
//   } else {
//     console.log("No discount");
//   }
// }

// getDiscountInfo("manager");

// // Exercise 5: Price After Tax

// function getPriceAfterTax(price, tax) {
//   const finalPrice = price + (price * tax) / 100;
//   const finalPriceString = `${finalPrice}$`;
//   return finalPriceString;
// }
// console.log(getPriceAfterTax(300, 21));

// // Exercise 6: Id Card Generator

// function generateIdCard(firstName, lastName, birthYear) {
//   const currentDate = new Date(); // Gets Current Date
//   const currentYear = currentDate.getFullYear(); // Shortens it to just the year
//   currentAge = currentYear - birthYear;
//   idCardString = `${firstName} ${lastName} - ${currentAge}`;
//   return idCardString;
// }

// const result = generateIdCard("Jane", "Doe", 1984);

// console.log(result);

// // Exercise 7: Bonus

// function calculator(mathSymbol, number1, number2) {
//   if (mathSymbol === "+") {
//     const result = number1 + number2;
//     return result;
//   }
// }

// console.log(calculator("+", 1, 1));
