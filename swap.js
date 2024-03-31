
const prompt = require("prompt-sync") ({sigint: true});

// Function is meant to change the cases of each character in a string
function caseSwap(string){
    let scan = "";
    for (let i = 0; i < input.length; i++) {
        let char = string.charAt(i);
        if (char === char.toUpperCase()) {
            scan += char.toLowerCase();
        } else {
            scan += char.toUpperCase();
        }
}
    return scan;
    console.log(scan);
}

//prompt user for a string
const input = prompt("Enter a string: ");

// This calls the function and since the result has been assigned, storage space is assigned for the answers of the function
let result = caseSwap(input)

// The output for the function
console.log(result);
