function numbertype(number) { // Function Creation 
    
    if (number > 0) {   // Conditional statements to check the number greater then Zero 
        return `${number} is a positive number.`; // Return Statement to check the corresponding string value for each case
    } else if (number < 0) {// Conditional statements to check the number less then Zero 
        return `${number} is a negative number.`; 
    } else {// Conditional statements to check the number is neutral
        return `${number} is neutral (zero).`;
    }
    console.log(numbertype);
       
}
let value = -1; // intializing variable and declaring value for it
let result = numbertype(value); // calling function and storing the result in variable
console.log(result); // Print the Result