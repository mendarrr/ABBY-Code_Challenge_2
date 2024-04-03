// Function that generates an array
function generateArray(first, last) {
  
    let result = []
    for (let i = first; i <= last; i++) {
    result.push(i)
    }
    return result;
}

// The first and last number ought to be declared - Prompt the user 
    const first = parseInt(prompt("Enter the first number: "));
    const last = parseInt(prompt("Enter the last number: "));


// Allocate storage space for the new array
    let result = generateArray(first, last);


//Displays the result for the function
    console.log(result);
    window.alert(result);


// Call the function:
    generateArray()