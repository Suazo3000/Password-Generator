// Define string, lowercase, uppercase, special character, and numbers
var generateBtn = document.querySelector("#generate"); 
var lower_Case = "abcdefghijklmnopqrstuvwxyz"; 
var upper_Case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
var special = "!@,#$%&*{}[]+\/="; 
var numbers = "0123456789"; 
var chosenChar= ""; // Initialize a variable to store the selected characters for the password

// Write password to the #password input
function writePassword() {
  chosenChar = ""; // Clear the chosen characters 
  var password = generatePassword(); // Call the generatePassword function to create the password
  var passwordText = document.querySelector("#password"); // Get the input element with the ID "password" and store it in the variable "passwordText"
  passwordText.value = password; 
}

// Add a click event listener 
generateBtn.addEventListener("click", writePassword);

// Function to generate a password based on user preferences
function generatePassword() {
  var result = ""; // Initialize an empty string to store the generated password
  var length = prompt("How many characters do you want your random password to contain? (between 8 and 128)"); // Ask the user for the desired password length and store it in the variable "length"

  // Check if the entered length is not a number or falls outside the valid range (8 to 128)
  if (isNaN(length) || length < 8 || length > 128) {
    // If the input is invalid, show an alert and recursively call the generatePassword function to re-prompt the user
    alert("Please choose a character count between 8 - 128!");
    return generatePassword();
  }

  var hasUpper = confirm("Include Upper case letters?");

  var hasLower = confirm("Include Lower case letters?");

  var hasNumbers = confirm("Include numbers?");

  var hasSpecial = confirm("Include special characters?");

 
  if (!hasUpper && !hasLower && !hasNumbers && !hasSpecial) {
    // If no character type is selected, show an alert and recursively call the generatePassword function to re-prompt the user
    alert("You must select at least 1 type of character!");
    return generatePassword();
  }

  // Concatenate the character sets based on the user's selection
  if (hasUpper) {
    chosenChar += upper_Case;
  }
  if (hasLower) {
    chosenChar += lower_Case;
  }
  if (hasNumbers) {
    chosenChar += numbers;
  }
  if (hasSpecial) {
    chosenChar += special;
  }

  
  for (var i = 0; i < length; i++) {
    result += chosenChar.charAt(Math.floor(Math.random() * chosenChar.length));
  }

  // Return the generated password
  return result;
}