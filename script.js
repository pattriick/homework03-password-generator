// var r;
// var t;
// var z;
// var y;
// var x = undefined;
// var Q1;
// var Q2 = undefined;
// var Q3 = undefined;
// var Q4 = undefined;
// var Q5 = undefined;
// var howLong;
let lowerCase;
let upperCase;
let numbers;
let specialCharacters;
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var question1 = prompt("How many characters?(between 8 and 128)");
    // question1 = Q1;
    console.log(question1);
    
    var question2 = prompt("Include lowercase letters?(Y or N)");
    
    if (question2 == "Y"){
      // y = question2;
      question2 = true;
    } else if (question2 == "N"){
      // y = question2;
      question2 = false;
    }
    console.log(question2);
  
    var question3 = prompt("Include uppercase letters?(Y or N)");
    
    if (question3 == "Y"){
      // z = question3;
      question3 = true;
    } else if (question3 == "N"){
      // z = question3;
      question3 = false;
    }
    console.log(question3);

  var question4 = prompt("Include numbers?(Y or N)");
   
    if (question4 == "Y"){
      // t = question4;
      question4 = true;
    } else if (question4 == "N"){
      // t = question4;
      question4 = false;
    }
    console.log(question4);

    var question5 = prompt("Include special characters?(Y or N");
    
    if (question5 == "Y"){
      // r = question5;
      question5 = true;
    } else if (question5 == "N"){
      // r = question5;
      question5 = false;
    }
    console.log(question5);
  
// var password = generatePassword();

var password = Array(question1);

console.log(password);

var pwBox = "";

if (question2 == true){
  lowerCase = "abcdefghijklmnopqrstuvwxyz";
  pwBox = pwBox + lowerCase;
} else if (question2 == false) {
  lowerCase = false;
}
console.log(lowerCase);
if (question3 == true){
  upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  pwBox = pwBox + upperCase;
} else if (question3 == false){
  upperCase = false;
}

if (question4 == true){
  numbers = "1234567890"
  pwBox = pwBox + numbers;
} else if (question4 == false){
  numbers = false;
}

if (question5 == true){
  specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  pwBox = pwBox + specialCharacters;
} else if (question5 == false) {
  specialCharacters = false;
}

pwBox.split();

for ( let i = 1; i < question1; i++) {
  password.push(pwBox[Math.floor(Math.random()*pwBox.length)]);
}

password[0] = pwBox[Math.floor(Math.random()*pwBox.length)];

console.log(password);

password = password.join('');

console.log(password);

password.toString();
  
  
  // password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);