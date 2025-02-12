// // Exercise 1: Array Adventure 1

// let adventures = [];

// adventures.push(
//   "Machu Picchu",
//   "Bora Bora",
//   "Petra",
//   "Serengeti",
//   "Grand Canyon"
// );

// console.log(adventures);
// console.log(adventures.length);
// console.log(adventures[0]);
// console.log(adventures[adventures.length - 1]);

// // Exercise 2: Array Adventure 2

// const destinations = [
//   "Everest",
//   "Yellowstone",
//   "Victoria Falls",
//   "Galapagos",
//   "Uluru",
// ];

// console.log(destinations);

// destinations.push("Taiwan");

// console.log(destinations);

// const favoriteDestination = destinations[5];
// const dislikedDestination = destinations[1];

// console.log(`My favorite destionation is ${favoriteDestination}`);
// console.log(`My least favorite destination is ${dislikedDestination}`);

// // Exercise 3: Swap First and Last

// const myArray = ["Cola", "Fanta", "Sprite", "Mate", "Beer"];
// console.log(myArray);

// // Remove and Store last

// const lastDrink = myArray.pop();

// console.log(myArray);
// console.log(lastDrink);

// // Remove and Store first

// const firstDrink = myArray.shift();
// console.log(myArray);
// console.log(firstDrink);

// // Swap Around by Adding

// myArray.unshift("Beer");
// myArray.push("Cola");
// console.log(myArray);

// // Exercise 4: Price Total

// const prices = [10.99, 44.56, 112.79, 3, 5];
// let sum = 0; // start value for the sum

// // Your code here:

// for (let i = 0; i < prices.length; i++) {
//   console.log(prices[i]);
//   sum += prices[i];
// }

// sum = Math.round(sum);

// console.log(sum);

// // Exercise 5: Price Total

// const phrases = [
//   "Tell me and I forget. ",
//   "Teach me and I remember. ",
//   "Involve me and I learn.",
// ];

// let proverb = "";
// let proverbReversed = "";

// // Your code here:

// for (let i = 0; i < phrases.length; i++) {
//   // console.log(phrases[i]);
//   proverb += phrases[i];
// }

// console.log(proverb);

// for (let i = phrases.length - 1; i >= 0; i--) {
//   // console.log(phrases[i]);
//   proverbReversed += phrases[i];
// }

// console.log(proverbReversed);

// Exercise 6: TV Series

let seriesPending = [
  "Breaking Bug",
  "Game of Drones",
  "Boolean 99",
  "Arrested Developer",
];

seriesPending.push("Severance");
// console.log(seriesPending);

for (let i = 0; i <= seriesPending.length - 1; i++) {
  console.log(`${i}: ${seriesPending[i]}`);
  if (seriesPending[i] === "Boolean 99") {
    console.log("Found it!");
  }
}

// Move add first element of Pending to end of Waching

const seriesWatching = [];

const firstElement = seriesPending.shift(0);
console.log(firstElement);

seriesWatching.push(firstElement);

console.log(seriesWatching);

// Loop to move all the stuff to watching

for (let i = 0; i < 4; i++) {
  seriesWatching.push(seriesPending.shift());
}

console.log(
  `seriesPending: ${seriesPending.length}, seriesWatching: ${seriesWatching.length}.`
);

seriesWatching.splice(0, seriesWatching.length);
console.log(seriesWatching);
