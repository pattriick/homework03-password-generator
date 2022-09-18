//define variables for prompt responses

let lowerCase;
let upperCase;
let numbers;
let specialCharacters;

// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  //ask prompt questions and save into variables
  
  var question1 = prompt("How many characters?(between 8 and 128)");
    // question1 = Q1;
    console.log(question1);
    
    var question2 = prompt("Include lowercase letters?(Y or N)");
    
    if (question2 == "Y"){
      question2 = true;
    } else if (question2 == "N"){
      question2 = false;
    }
    console.log(question2);
  
    var question3 = prompt("Include uppercase letters?(Y or N)");
    
    if (question3 == "Y"){
      question3 = true;
    } else if (question3 == "N"){
      question3 = false;
    }
    console.log(question3);

  var question4 = prompt("Include numbers?(Y or N)");
   
    if (question4 == "Y"){
      question4 = true;
    } else if (question4 == "N"){
      question4 = false;
    }
    console.log(question4);

    var question5 = prompt("Include special characters?(Y or N");
    
    if (question5 == "Y"){
      question5 = true;
    } else if (question5 == "N"){
      question5 = false;
    }
    console.log(question5);
  
var password = Array(question1);

//define variable for the password preferences

var pwBox = "";

//assign qualities to the password preferences based on prompt questions

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

//change password prefferences from a string to an array

pwBox.split();

//generate the password with items from the variable preferences

for ( let i = 1; i < question1; i++) {
  password.push(pwBox[Math.floor(Math.random()*pwBox.length)]);
}

//replace first item in array with random item 

password[0] = pwBox[Math.floor(Math.random()*pwBox.length)];

console.log(password);

password = password.join('');

console.log(password);

password.toString();
  
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);