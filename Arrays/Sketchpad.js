// Declare a function that takes one parameter "arr"
function getCookies(arr) {
  const filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (element === "cookie") {
      // If the element is a string "cookie" add it to the new array
      filteredArray.push(element);
    }
  }

  // Return the new filtered array after the loop
  return filteredArray;
}

const food = ["salad", "cookie", "fish", "cookie", "soup", "cookie"];

// Invoke the function and pass an array as the argument.
// Save the returned array to a variable named "result":
const result = getCookies(food);

console.log(food); // ==> ['salad', 'cookie', 'fish', 'cookie', 'soup', 'cookie']
console.log(result); // ==> ['cookie', 'cookie', 'cookie']
