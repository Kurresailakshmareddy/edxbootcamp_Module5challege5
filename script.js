// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
var upperCasedCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');


// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = parseInt(prompt('Enter the password length (between 8 and 128):'));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert('Please enter a valid password length between 8 and 128.');
    return null;
  }

  var includeLowercase = confirm('Include lowercase characters?');
  var includeUppercase = confirm('Include uppercase characters?');
  var includeNumeric = confirm('Include numeric characters?');
  var includeSpecial = confirm('Include special characters?');

  if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
    alert('You must select at least one character type.');
    return null;
  }

  return {
    length: passwordLength,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase,
    includeNumeric: includeNumeric,
    includeSpecial: includeSpecial,
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();

  if (options === null) {
    return 'Password generation canceled.';
  }

  
  var allCharacters = [];

  if (options.includeLowercase) {
    allCharacters = allCharacters.concat(lowerCasedCharacters);
  }
  if (options.includeUppercase) {
    allCharacters = allCharacters.concat(upperCasedCharacters);
  }
  if (options.includeNumeric) {
    allCharacters = allCharacters.concat(numericCharacters);
  }
  if (options.includeSpecial) {
    allCharacters = allCharacters.concat(specialCharacters);
  }
  
  var password = '';
  for (var i = 0; i < options.length; i++) {
    password += getRandom(allCharacters);
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password) {
    alert('Generated Password: ' + password);
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);