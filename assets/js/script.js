// Assignment Code
var generateBtn = document.querySelector("#generate");

//Define variables for Modal form
let pwdLen = 0;
let upBool = false;
let lwBool = false;
let spBool = false;
let nmBool = false;

//Define variables to determine if character selection is used
let upUsed = false;
let lwUsed = false;
let spUsed = false;
let nmUsed = false;

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
    //Flipping coin to see if the next character sequence is Upper Case
    rndNum = Math.floor((Math.random() * 2) + 1);
    if ((upBool) && (rndNum == 1)) {
      //add character from random postion in Upper string
      passwd = passwd + strUpCase.charAt(Math.floor((Math.random() * 26) + 1)-1);
      upUsed = true;
      i++;
    }

    //Flipping coin to see if the next character sequence is Lower Case
    rndNum = Math.floor((Math.random() * 2) + 1);
    if ((lwBool) && (rndNum == 1)) {
      //add character from random postion in Lower string
      passwd = passwd + strLowCase.charAt(Math.floor((Math.random() * 26) + 1)-1);      
      lwUsed = true;
      i++;
    }

    //Flipping coin to see if the next character sequence is Special
    rndNum = Math.floor((Math.random() * 2) + 1);
    if ((spBool)  && (rndNum == 1)) {
      //add character from random postion in Special string
      passwd = passwd + strSpecial.charAt(Math.floor((Math.random() * 20) + 1)-1);
      spUsed = true;
      i++;
    }
    
    //Flipping coin to see if the next character sequence is Number
    rndNum = Math.floor((Math.random() * 2) + 1);
    if ((nmBool)  && (rndNum == 1)) {
      //add character from random postion in Number string
      passwd = passwd + strNumbers.charAt(Math.floor((Math.random() * 10) + 1)-1);
      nmUsed = true;
      i++;
    }
  }

  // Verify if the proper character types are used
  if ((nmBool == nmUsed) && (spBool == spUsed) && (upBool == upUsed) && (lwBool == lwUsed)) {
    return passwd;
  } else { // reset and rerun generation
    console.log(passwd + "error");
    upUsed = false; lwUsed = false; spUsed = false; nmUsed = false;
    let errPassword = generatePassword();
    return errPassword;
  }
  
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// Removed this to use the Modal form
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

  //Check the request length and that at least one character option is selected
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