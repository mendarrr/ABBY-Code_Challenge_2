const prompt = require("prompt-sync") ({sigint: true});
// Function that generates an array
function generateArray(first, last) {

// The first number must be graeter then the last for function to work
    if (first>= last) {
        console.log("Invalid input. The first number must be less than the last number.");
    }
// the program proceed when the input passes the test above
    let result = []
    for (let i = first; i <= last; i++) {
    result.push(i)
    }
    return result;
}
// The first and last number ought to be declared
    let firstNumber;
    let lastNumber;
// This program requires its input to be numbers and so the following conditions must pass for it to proceed
    while (true) {
      firstNumber = parseInt(prompt("Enter the first number: "));
      if (!isNaN(firstNumber)) {
        break;
      }
      console.log("Invalid input. Please enter a number.");
    }

    while (true) {
      lastNumber = parseInt(prompt("Enter the last number: "));
      if (!isNaN(lastNumber)) {
        break;
      }
      console.log("Invalid input. Please enter a number.");
    }

    let result = generateArray(firstNumber, lastNumber);

//Displays the result for the function
console.log(result);

// When you want to call the function:
generateArray()