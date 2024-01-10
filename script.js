// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Password properties
var password = {
  length: 0,
  specialCharacters: "",
  numericCharacters: "",
  lowerCasedCharacters: "",
  upperCasedCharacters: "",
};

// Function to prompt user for password options
// I had to take into consideration that the user could enter a number outside of the range, or a string and not a number. User could also leave length blank.
function getPasswordOptions() {
  while (!password.length) {
    password.length = parseInt(prompt("Please enter the length of your password. Must be between 8 and 128 characters."));
    if (password.length < 8 || password.length > 128 || isNaN(password.length)) {
      alert("Please enter a valid length.");
      password.length = 0; // Reset the length to trigger the while loop again
    }
  }
  password.specialCharacters = confirm("Click OK to include special characters.");
  password.numericCharacters = confirm("Click OK to include numeric characters.");
  password.lowerCasedCharacters = confirm("Click OK to include lowercase characters.");
  password.upperCasedCharacters = confirm("Click OK to include uppercase characters.");
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}

// Function to generate password with user input
// I had to take into consideration that the user could select no options, or all options.
function generatePassword() {
  getPasswordOptions();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  if (password.specialCharacters) {
    possibleCharacters += getRandom(specialCharacters);
    guaranteedCharacters += getRandom(specialCharacters);
  }
  if (password.numericCharacters) {
    possibleCharacters += getRandom(numericCharacters);
    guaranteedCharacters += getRandom(numericCharacters);
  }
  if (password.lowerCasedCharacters) {
    possibleCharacters += getRandom(lowerCasedCharacters);
    guaranteedCharacters += getRandom(lowerCasedCharacters);
  }
  if (password.upperCasedCharacters) {
    possibleCharacters += getRandom(upperCasedCharacters);
    guaranteedCharacters += getRandom(upperCasedCharacters);
  }

  for (var i = 0; i < password.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);
    result.push(possibleCharacter);
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  return result.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);