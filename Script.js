// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var specialCharacters = ["!", "”", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "/", "^", "_", "`", "{", "}", "|", "~"];
// var index = Math.floor(Math.random * password.length)

function generatePasswordOptions() {

  var length = prompt("enter length of your password between 8 & 128 characters");
  console.log(length)
  // todo: if characters is less than 8 or more than 128, error message (alert) is needed

  var hasSpecialCharacters = confirm("Do you want special characters? then click ok")
  console.log(hasSpecialCharacters)

  var hasNumbers = confirm("Do you want numbers? then click ok")
  console.log(hasNumbers)

  var hasLowercaseLetters = confirm("Do you want lowercase letters? then click ok")
  console.log(hasLowercaseLetters)

  var hasUppercaseLetters = confirm("do you want uppercase letters? then click ok")
  console.log(hasUppercaseLetters)
  //  todo: if everything is canceled (false), one needs to be set as true

  var passwordOptions = {
    Length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumbers: hasNumbers,
    hasLowercaseLetters: hasLowercaseLetters,
    hasUppercaseLetters: hasUppercaseLetters,

  }
  return passwordOptions;
}
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex]
  console.log(randomElement)
  return randomElement;
}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// pass must include 1 upper, 1 lower, 8 chars min, max 128 chars
function generatePassword() {
  var options = generatePasswordOptions();
var result=[];
var Characters=[];
var definiteCharacters=[];
console.log("test line 60");
if (options.hasLowercaseLetters) {
  Characters=Characters.concat(lowercaseLetters);
}
if (options.hasUppercaseLetters) {
  Characters=Characters.concat(uppercaseLetters);
}
if (options.hasNumbers) {
    Characters=Characters.concat(numbers);
}

if (options.hasSpecialCharacters) {
      Characters=Characters.concat(specialCharacters);
}



// this function helps create the random pass string
for(var i=0; i < options.Length; i++) {
  var Character=getRandom(Characters);
  result.push(Character);
}




// for(var i=0; i < definiteCharacters.length; i++)  {

//   result[i] = definiteCharacters[i]

// }
return result.join("");
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// todo: add an event when a number is not entered