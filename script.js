// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create password object & properties
var possibilities = new Object();
possibilities.numbers = "0123456789";
possibilities.letters = "abcdefghijklmnopqrstuvwxyz";
possibilities.characters = "!@#$%^&*~";
console.log(possibilities);



//  Create possible prompt responses
var response = ["yes", "no"];

// Create length prompt
var lengthPrompt = prompt("Desired Password Length (min:8 Max:128)");
    if (lengthPrompt >= 8 && lengthPrompt <= 128) {
      var lengthAnswer = lengthPrompt;
    }
    else {
      do {
        var lengthPrompt = prompt("Password length must be bewteen 8 and 128");       //Our do/while works here
      }
      while (lengthAnswer < 8 || lengthAnswer > 128);
    }

console.log(lengthPrompt);

// Create upper/lower prompt
var casePrompt = prompt("Desired letter case: 'upper', 'lower', 'both'.");

    if (casePrompt == "upper") {
      var caseAnswer = casePrompt;
    }
    else if (casePrompt == "lower") {
      var caseAnswer = casePrompt;
    }
    else if (casePrompt == "both") {
      var caseAnswer = casePrompt;
    }
    else {
      do {
        var casePrompt = prompt("You must select either 'upper', 'lower' or 'both' casing types."); //Our do/while does not work here
      }
      while (caseAnswer != "upper" || caseAnswer != "lower" || caseAnswer != "both");               //something to do w/ the != syntax?
    
    }

console.log(possibilities.letters);


    // if (casePrompt == "upper" || casePrompt == "lower" || casePrompt == "both") {
    //   var caseAnswer = casePrompt;
    // }
    // else {
    //   while (caseAnswer != "upper" || caseAnswer != "lower" || caseAnswer != "both") {
    //     var casePrompt = prompt("You must select either 'upper', 'lower' or 'both' casing types.")
    //   }
    // }
   

// Create numeric prompt
var numPrompt = prompt("Would you like numbers in your password (yes/no)?");

    if (numPrompt == "yes") {
      var numAnswer = numPrompt;  
    }
    else if (numPrompt == "no") {
      var numAnswer = numPrompt;
    }
    else {
      while (numAnswer != "yes" || numAnswer != "no") {
        var numPrompt = prompt("Please answer yes or no to include numbers in your password.");
      }
    }



//Create function to handle casing
function casing(x) {
  if (x == "upper") {
    possibilities.letters = possibilities.letters.toUpperCase();
  }
  else if (x == "lower") {
    possibilities.letters = possibilities.letters.toLowerCase();
  }
  else if (x == "both") {
    possibilities.letters = possibilities.letters.toUpperCase().concat(possibilities.letters.toLowerCase());
  }
}

casing(lengthAnswer)





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
