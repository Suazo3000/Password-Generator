// Assignment Code
var generateBtn = document.querySelector("#generate");
var upper_Case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower_Case = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@,#$%&*{}[]+\/=";
var chosenCharacters = "";


// Write password to the #password input
function writePassword() {
    chosenCharacters = "";
    // Calls the function generatepassword
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    }