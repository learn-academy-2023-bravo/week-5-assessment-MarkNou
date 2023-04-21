// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe("messageDecoder", () => {
  it("converts a to 4, e to 3, i to 1, and o to 0", () => {
    expect(messageDecoder(secretCodeWord1)).toEqual("L4ck4d41s1c4l");
    expect(messageDecoder(secretCodeWord2)).toEqual("G0bbl3dyg00k");
    expect(messageDecoder(secretCodeWord3)).toEqual("3cc3ntr1c");
  });
});

//Jest Output:
// FAIL  ./code-challenges.test.js
// ● message_decoder › converts a to 4, e to 3, i to 1, and o to 0

//   expect(received).toEqual(expected) // deep equality

//   Expected: "L4ck4d41s1c4l"
//   Received: "Lackadaisical"

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// b) Create the function that makes the test pass.

//Create a function called 'messageDecoder' that takes a string as a parameter
//Use '.split('')' to turn string into an array with all letters at a different index
//Loop through the array with '.map'
//Use conditional statement and equality operator, if conditions are met convert "a" to 4, "e" to 3, "i" to 1, and "o" to 0, and all other letters left as is.
// Use '.toLowerCase()' to account for capitilization,
//Use '.join()' and '.toString' to return string

const messageDecoder = (string) => {
  array = string.split("").map((value) => {
    if (value.toLowerCase() === "a") return "4";
    else if (value.toLowerCase() === "e") return "3";
    else if (value.toLowerCase() === "i") return "1";
    else if (value.toLowerCase() === "o") return "0";
    else return value;
  });
  return array.join("");
};

 //Jest Output:
//  PASS  ./code-challenges.test.js
//  messageDecoder
//    ✓ converts a to 4, e to 3, i to 1, and o to 0 (4 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("mustInclude", () => {
  it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
    expect(mustInclude(fruitArray, letterA)).toEqual([
      "Mango",
      "Apricot",
      "Peach",
    ]);
    expect(mustInclude(fruitArray, letterE)).toEqual([
      "Cherry",
      "Blueberry",
      "Peach",
    ]);
  });
});

//Jest Output:
// FAIL  ./code-challenges.test.js
// messageDecoder
//   ○ skipped converts a to 4, e to 3, i to 1, and o to 0
// mustInclude
//   ✕ takes in an array of words and a single letter and returns an array of all the words containing that particular letter (4 ms)

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.

//Create a function called mustInclude that takes in an array and a letter as a parameter
//Iterate through the array with '.filter'
//Use conditional statement with an equality operator
//Use '.includes()' to see if the word includes the given letter
//Use '.toLowerCase()' to account for capitalization
//Return words in an array

const mustInclude = (array, letter) => {
  return array.filter((value) => {
    return value.toLowerCase().includes(letter);
  });
};

//Jest Output:
// PASS  ./code-challenges.test.js
// messageDecoder
// ○ skipped converts a to 4, e to 3, i to 1, and o to 0
// mustInclude
// ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter (4 ms)

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

fdescribe("fullHouse", () => {
  it("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
    expect(fullHouse(hand1)).toEqual(true);
    expect(fullHouse(hand2)).toEqual(false);
    expect(fullHouse(hand3)).toEqual(false);
    expect(fullHouse(hand4)).toEqual(true);
  });
});

//Jest Output:
// FAIL  ./code-challenges.test.js
// messageDecoder
//   ○ skipped converts a to 4, e to 3, i to 1, and o to 0
// mustInclude
//   ○ skipped takes in an array of words and a single letter and returns an array of all the words containing that particular letter
// fullHouse
//   ✕ takes in an array of 5 numbers and determines whether or not the array is a full house (2 ms)

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.

//Create a function called 'fullHouse' that takes in an array as a parameter
//Create a variable called sorted to hold the array with '.sort()' applied
// Use conditional statement and equality operators
// Since the array is sorted, use the only 2 possibilities to see if the values at certain indexes give us a fullhouse. (3 of a kind followed by a pair, or a pair followed by 3 of a kind.)
// Return true if condition is met, else return false

const fullHouse = (array) => {
    const sorted = array.sort();
    if (
      (sorted[0] === sorted[1] &&
        sorted[1] === sorted[2] &&
        sorted[3] === sorted[4]) ||
      (sorted[0] === sorted[1] &&
        sorted[2] === sorted[3] &&
        sorted[3] === sorted[4])
    ) {
      return true;
    } else {
      return false;
    }
  };
  

//Jest Output:
// ?? PASS  ./code-challenges.test.js
// messageDecoder
//   ○ skipped converts a to 4, e to 3, i to 1, and o to 0
// mustInclude
//   ○ skipped takes in an array of words and a single letter and returns an array of all the words containing that particular letter
// fullHouse
//   ✓ takes in an array of 5 numbers and determines whether or not the array is a full house (5 ms)
