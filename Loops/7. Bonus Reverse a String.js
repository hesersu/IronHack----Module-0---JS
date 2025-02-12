const word = "Hello";
let wordReversed = "";

// Your code:

for (i = word.length - 1; i >= 0; i--) {
  const char = word[i];
  wordReversed += char;
}

// Expected output: "olleH"

console.log(wordReversed);
