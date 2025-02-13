// // Exercise 1-1.

// const book = {
//   title: "Dracula",
//   author: "Bram Stoker",
//   year: 1897,
// };

// console.log(book.title);
// console.log(book.author);

// // Exercise 2.

// const car = {
//   make: "Audi",
//   model: "A6",
//   year: 2006,
// };

// console.log(`${car.make} ${car.model} ${car.year}`);

// //Exercise 3.

// const company = {
//   name: "Acme Corporation",
//   address: {
//     street: "123 Main St",
//     city: "Anytown",
//     state: "CA",
//     zip: "12345",
//     country: "USA",
//     buildingColor: "white",
//   },
//   departments: {
//     sales: {
//       floor: 8,
//       manager: { name: "John Doe", email: "johndoe@acme.com" },
//       employees: [
//         { name: "Jane Smith", email: "janesmith@acme.com" },
//         { name: "Bob Johnson", email: "bobjohnson@acme.com" },
//       ],
//     },
//     marketing: {
//       manager: { name: "Sara Lee", email: "saralee@acme.com" },
//       employees: [
//         { name: "Tim Brown", email: "timbrown@acme.com" },
//         { name: "Emily Davis", email: "emilydavis@acme.com" },
//       ],
//     },
//   },
// };

// // Your code here:

// // delete company.address.buildingColor;

// // delete company["departments"]["sales"]["floor"];

// console.log(company.address.buildingColor);

// console.log(company["departments"]["sales"]["floor"]);

// // Exercise 4. Remore the Imposter

// const airplane = {
//   manufacturer: "Boeing",
//   model: "747-8",
//   engines: [
//     { number: 1, type: "GE Aviation GEnx-2B" },
//     { number: 2, type: "GE Aviation GEnx-2B" },
//   ],
//   seats: {
//     firstClass: {
//       capacity: 30,
//       amenities: ["Lie-flat seats", "Personal screens", "Wi-Fi"],
//       champagneFountain: true,
//     },
//     businessClass: {
//       capacity: 60,
//       amenities: ["Reclining seats", "Personal screens", "USB ports"],
//     },
//     economyClass: {
//       capacity: 300,
//       amenities: ["Standard seats", "Shared screens", "No Wi-Fi"],
//       legRoom: "non-existent",
//     },
//   },
//   features: {
//     entertainment: ["Movies", "TV shows", "Music"],
//     food: ["Meals", "Snacks", "Beverages"],
//     safety: ["Life vests", "Emergency exits", "First aid kit"],
//     fuelType: "Fairy Dust",
//   },
// };

// // Your code here:

// delete airplane.features.fuelType;
// delete airplane.seats.economyClass.legRoom;

// delete airplane["seats"]["firstClass"]["champagneFountain"];

// console.log(airplane);

// // Exercise 5.

// const book = {
//   title: "Dracula",
//   autor: "Bram Stoker",
//   year: 1897,
// };

// const allKeys = Object.keys(book);
// console.log(allKeys);

// // Exercise 6.

// const student = {
//   name: "James",
//   age: "Doe",
//   school: "Ironhack",
//   course: "Web Development",
//   techStack: "FE",
// };

// const allKeys = Object.keys(student);
// console.log(allKeys);

// // Exercise 7.

// const dog = {
//   name: "Fluff",
//   breed: "Bulldog",
//   color: "Tan",
//   age: "3",
// };

// const allValues = Object.values(dog);
// console.log(allValues);

// Exercise 8.

const product = {
  brand: "Apple",
  model: "MacBook Air",
  available: false,
  price: 1200,
  tags: ["apple", "laptop", "mac"],
};

// 3.

product.year = 2019;
console.log(product.year);

// 4.

product.available = true;
console.log(product.available);

//  5. step

delete product.tags;
console.log(product.tags);

// 6. step

if (product.price > 1000) {
  product.discount = 10;
}

console.log(product.discount);

// 7. step

product.price -= product.price * (product.discount / 100);
console.log(product.price);

// 8. step

if ("discount" in product === true) {
  console.log(
    `We got a ${product.model} on sale for just $${product.price}. That's ${product.discount}% off!!!`
  );
}
