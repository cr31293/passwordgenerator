// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create password object & properties
var possibilities = new Object();
possibilities.numbers = "0123456789";
possibilities.letters = "abcdefghijklmnopqrstuvwxyz";
possibilities.characters = "!@#$%^&*~";
possibilities.length = "";
possibilities.password = "";

//Create function to set proper object properties
function setpossibilities(lengthAnswer, caseAnswer, numAnswer, charAnswer) {

  //.length
  possibilities.length = lengthAnswer;

  //.letters
  if (caseAnswer === "upper") {
    possibilities.letters = possibilities.letters.toUpperCase();
  }
  else if (caseAnswer === "lower") {
    possibilities.letters = possibilities.letters.toLowerCase();
  }
  else if (caseAnswer === "both") {
    possibilities.letters = possibilities.letters.toUpperCase().concat(possibilities.letters.toLowerCase());
  }
  

  //.numbers?
  if (numAnswer === "yes") {
    possibilities.numbers = possibilities.numbers;
  }
  else {
    possibilities.numbers = "";
  }

  //.specialcharacters?
  if (charAnswer === "yes") {
    possibilities.characters = possibilities.characters;
  }
  else {
    possibilities.characters = "";
  }
}


// Create length prompt
var lengthPrompt = prompt("Desired Password Length (min:8 Max:128)");
    if (lengthPrompt >= 8 && lengthPrompt <= 128) {
      var lengthAnswer = lengthPrompt;
    }
    else {
        var lengthAnswer = prompt("Password length must be bewteen 8 and 128");       
      }

console.log(lengthAnswer);


// Create upper/lower prompt
var caseAnswer;
var casePrompt = prompt("Desired letter case: 'upper', 'lower', 'both'.");

    if (casePrompt === "upper") {
       caseAnswer = casePrompt;
    }
    else if (casePrompt === "lower") {
       caseAnswer = casePrompt;
    }
    else if (casePrompt === "both") {
       caseAnswer = casePrompt;
    }
    else if (caseAnswer !== "upper" || caseAnswer !== "lower" || caseAnswer !== "both") {            
         caseAnswer = prompt("You must select either 'upper', 'lower' or 'both' casing types."); 

    }
    console.log(caseAnswer);

// Create numeric prompt
var numPrompt = prompt("Would you like numbers in your password (yes/no)?");

    if (numPrompt === "yes") {
      var numAnswer = numPrompt;  
    }
    else if (numPrompt === "no") {
      var numAnswer = numPrompt;
    }
    else if (numAnswer !== "yes" || numAnswer !== "no") {
        var numAnswer = prompt("Please answer yes or no to include numbers in your password.");
      }


    console.log(numAnswer);


// Create character prompt
var charPrompt = prompt("Would you like special characters in your password (yes/no)?");

    if (charPrompt == "yes") {
      var charAnswer = charPrompt;
    }
    else if (charPrompt == "no") {
      var charAnswer = charPrompt;
    }
    else if (charAnswer != "yes" || charAnswer != "no") {
        var charPrompt = prompt("Please answer yer or no to include special characters in your password.");
      }
  

    console.log(charAnswer);

setpossibilities(lengthAnswer, caseAnswer, numAnswer, charAnswer);
console.log(possibilities);


function generatePassword(possibilities) {
  possibilities.bigstring = possibilities.numbers.concat(possibilities.letters.concat(possibilities.characters));
  possibilities.bigstringshuffled = possibilities.bigstring.split('').sort(function() {
    return 0.50-Math.random()
  }).join('');

possibilities.password = possibilities.bigstringshuffled.slice(0,lengthAnswer);

return(possibilities.password);
}



generatePassword(possibilities);

///////////////////////
// Write password to the #password input
function writePassword() {
  var password = generatePassword(possibilities);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

writePassword(possibilities);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
