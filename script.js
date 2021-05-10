// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;
var uppecaseCheck;
var numberCheck;
var specialCheck;
var lowerCaseABC = "abcdefghijklmnopqrstuvwxyz";
var upperCaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specials = "!'#$%&()*+,-./:;<=>?@[\]^_`{|}~";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function determineLength(){
  passwordLength = prompt("Please select a password length between 8 and 128 characters");

    if (passwordLength<8){
      alert("Password be between 8-128 characters");
      determineLength();
    }else if (passwordLength>128){
      alert("Password be between 8-128 characters");
      determineLength();
    }else if (isNaN(passwordLength)){
      alert("Password be between 8-128 characters");
      determineLength();
    }else{
    alert("Please answer the following prompts for your new password.");
    }
    return passwordLength;
}

function writePassword() {
  var password1 = "";
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}

function determineUppercase(){
  uppercaseCheck = prompt("Would you like to  include uppercase letters in your password? \n(Yes or No)");
    uppercaseCheck = uppercaseCheck.toLowerCase();

    if (uppercaseCheck === null || uppercaseCheck === ""){
      alert("Answer Yes or No");
      determineUppercase();

    }else if (uppercaseCheck === "yes" || uppercaseCheck ==="y"){
      uppercaseCheck = true;
      return uppercaseCheck;

    }else if (uppercaseCheck === "no" || uppercaseCheck ==="n"){
      uppercaseCheck = false;
      return uppercaseCheck;
    
    }else {
      alert("Answer Yes or No");
      determineUppercase();
    }
    return uppercaseCheck;
}
function determineSpecial(){
  specialCheck = prompt("Do you want to include special characters in your password? \n (Yes or No)");
    specialCheck = specialCheck.toLowerCase();

    if (specialCheck === null || specialCheck === ""){
      alert("Answer Yes or No");
      determineSpecial();

    }else if (specialCheck === "yes" || specialCheck ==="y"){
      specialCheck = true;
      return specialCheck;

    }else if (specialCheck === "no" || specialCheck ==="n"){
      specialCheck = false;
      return specialCheck;
    
    }else {
      alert("Answer Yes or No");
      determineSpecial();
    }
    return specialCheck;
}
function determineNumbers(){
  numberCheck = prompt("Would you like to include numbers in your password? \n(Yes or No)");
    numberCheck = numberCheck.toLowerCase();

    if (numberCheck === null || numberCheck === ""){
      alert("Answer Yes or No");
      determineNumbers();

    }else if (numberCheck === "yes" || numberCheck ==="y"){
      numberCheck = true;
      return numberCheck;

    }else if (numberCheck === "no" || numberCheck ==="n"){
      numberCheck = false;
      return numberCheck;
    
    }else {
      alert("Answer Yes or No");
      determineNumbers();
    }
    return numberCheck;
}
function generatePassword(){
  determineLength();
  console.log(passwordLength);
  determineUppercase();
  console.log(uppercaseCheck);
  determineNumbers();
  console.log(numberCheck);
  determineSpecial();
  console.log(specialCheck);

var characters = lowerCaseABC;
var password = "";
if (uppercaseCheck && numberCheck && specialCheck){
  characters += upperCaseABC + numbers + specials;

}else if (uppercaseCheck && numberCheck){
  characters += upperCaseABC + numbers;

}else if (numberCheck && specialCheck){
  characters += numbers + specials;

}else if (uppercaseCheck && specialCheck){
  characters += upperCaseABC + specials;

}else if (uppercaseCheck){
  characters += upperCaseABC;

}else if(numberCheck){
  characters += numbers;

}else if (specialCheck){
  characters += specials;

}else{
  characters === lowerCaseABC;
}

  for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}
function resetText(){
   document.getElementById("password").value = "Your Secure Password";
   }
