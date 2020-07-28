document.querySelector("#generate").addEventListener("click", writePassword);

 function passwordGeneration() {
    var passwordLength = (prompt("How many characters should the length of the password be?"));
    while (passwordLength >= 129 || passwordLength <= 7) {
        alert("Please make sure your password is the proper amount of characters."); 
        var passwordLength = (prompt("How many characters should the length of the password be?"));
    }

    var wantNumbers = confirm("Do you want numbers in your password?");
    var wantSpecial = confirm("Do you want special characters in your password?");
    var wantLowerCase = confirm("Do you want lower case letters in your password?");
    var wantUpperCase = confirm("Do you want upper case letters in your password?");

    while (wantNumbers === false && wantSpecial === false && wantLowerCase === false && wantUpperCase === false) {
        alert("You must choose at least one character type.");
        var wantNumbers = confirm("Do you want numbers in your password?");
        var wantSpecial = confirm("Do you want special characters in your password?");
        var wantLowerCase = confirm("Do you want lower case letters in your password?");
        var wantUpperCase = confirm("Do you want upper case letters in your password?");
    }
    
    var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialCharacter = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
    var passwordElements = [];

    if (wantNumbers) {
        passwordElements = passwordElements.concat(number)
    }

    if (wantSpecial) {
        passwordElements = passwordElements.concat(specialCharacter)
    }

    if (wantLowerCase) {
        passwordElements = passwordElements.concat(lowerCase)
    }

    if (wantUpperCase) {
        passwordElements = passwordElements.concat(upperCase)
    }

    console.log(passwordElements)

    var randomPassword = ""
      
    for (var i = 0; i < passwordLength; i++) {
       randomPassword = randomPassword + passwordElements[Math.floor(Math.random() * passwordElements.length)];
       console.log(randomPassword)
    }

    return randomPassword;
   
}

function writePassword() {
    var password = passwordGeneration();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
