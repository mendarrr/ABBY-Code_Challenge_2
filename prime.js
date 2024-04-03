
// Function checks whether a number is prime or not - Its in-built
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

// The first and last numbers should be present in order to create the range => Prompt the user to input them
   const startNumber = parseInt(prompt("Enter the First Number: "));
   
    const endNumber = parseInt(prompt("Enter the Last Number: "));

  // Assigning the storage space for the result of the function when it runs => Square brackets indicate that it is an array
    let primeNumbers = []; 
    
    // this links the two functions used in the program
    for (let n = startNumber; n <= endNumber; n++) {
    if (isPrime(n)) {
        primeNumbers.push(n);
    }
  }
  // Displays the prime numbers within the range given
    console.log( primeNumbers);
    window.alert(primeNumbers);
}
// Call the function for it to run
checkPrimeNumbers()
    