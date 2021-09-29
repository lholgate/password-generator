// Assignment Code
var generateBtn = document.querySelector("#generate");

var pwdLen = 0;
var upBool = false;
var lwBool = false;
var spBool = false;
var nmBool = false;

// Function to generate random password based on use input
function generatePassword() {

  // Variables to hold strings of charaters to use in password
  let strUpCase = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
  let strLowCase = "abcdefghijklmnopqrstuvwxyz";
  let strNumbers = "0123456789";
  let strSpecial = "`~!@#$%^&*()_+-=?/<>";

  let passwd = "";
  let rndNum = 0;
  let i = 0;
  console.log(pwdLen);
  while (i < pwdLen)  {
    rndNum = Math.floor((Math.random() * 2) + 1);
    if ((upBool) && (rndNum == 1)) {
      passwd = passwd + strUpCase.charAt(Math.floor((Math.random() * 26) + 1)-1);
      i++;
    }

    rndNum = Math.floor((Math.random() * 2) + 1);
    if ((lwBool) && (rndNum == 1)) {
      passwd = passwd + strLowCase.charAt(Math.floor((Math.random() * 26) + 1)-1);      ;
      i++;
    }

    rndNum = Math.floor((Math.random() * 2) + 1);
    if ((spBool)  && (rndNum == 1)) {
      passwd = passwd + strSpecial.charAt(Math.floor((Math.random() * 20) + 1)-1);
      i++;
    }
    
    rndNum = Math.floor((Math.random() * 2) + 1);
    if ((nmBool)  && (rndNum == 1)) {
      passwd = passwd + strNumbers.charAt(Math.floor((Math.random() * 10) + 1)-1);
      i++;
    }
  }

  return passwd;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("generate");

// Get the <span> element that closes the modal
var sbmt = document.getElementsByClassName("submit")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
sbmt.onclick = function() {

  //Get values from input boxes
  pwdLen = document.getElementById("pwdlen").value;
  upBool = document.getElementById("upper").checked;
  lwBool = document.getElementById("lower").checked;
  spBool = document.getElementById("special").checked;
  nmBool = document.getElementById("numbers").checked;

  if ((pwdLen >= 8) && (pwdLen <= 128) && (upBool || lwBool || spBool || nmBool)) {
    modal.style.display = "none";
    writePassword();
  } else {
    if ((pwdLen < 8) || (pwdLen > 128)) {
      alert("Length needs to be between 8 and 128!")
    } else {
      alert("Al least one character option needs to be checked!")
    }
  }

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}