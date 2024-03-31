//
const prompt = require("prompt-sync") ({sigint: true});

// Function checks whether a number is prime or not
function isPrime(n) {
    if (n < 2) {
        return false;
      }
    for (let p = 2; p <= Math.sqrt(n); p++) {
        if (n % p === 0) {
            return false;
        }
    }
    return true;
}

// The function isolates prime numbers in a given range of numbers
function checkPrimeNumbers(){
    let startNumber;
    let endNumber;
// Condition to test whether the input is a number which is essential for the function to work
while (true) {
    startNumber = parseInt(prompt("Enter the first number: "));
    if (!isNaN(startNumber)) {
        //function stops if the input is not a number
      break;
    }
    console.log("Please enter a number.");
  }
  
  while (true) {
    endNumber = parseInt(prompt("Enter the last number: "));
    if (!isNaN(endNumber)) {
      break;
    }
    console.log("Please enter a number.");
  }
  
  // Assigning the storage space for the result of the function when it runs
    let primeNumbers = [];
    for (let n = startNumber; n <= endNumber; n++) {
    if (isPrime(n)) {
        primeNumbers.push(n);
    }
  }
  // Displays the prime numbers within the range given
    console.log( primeNumbers);
}
// Call the function for it to run
checkPrimeNumbers()
    