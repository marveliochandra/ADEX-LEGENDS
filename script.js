var email = document.getElementById("email-id");
var password = document.getElementById("password-id");
var button = document.getElementById("sign-in-btn");
var username = document.getElementById("username");
var fullname = document.getElementById("fullname");
var address = document.getElementById("address");

function checkFullname() {
  let number = "0123456789";

  for (let i = 0; i < fullname.value.length; i++) {
    for (let j = 0; j < number.length; j++) {
      if (fullname.value[i] == number[j]) {
        return false;
      }
    }
  }

  return true;
}

function checkPassword() {
  let number = "0123456789";
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let checkNumber = false;
  let checkAlphabet = false;

  for (let i = 0; i < password.value.length; i++) {
    for (let j = 0; j < number.length; j++) {
      if (password.value[i] == number[j]) {
        checkNumber = true;
        break;
      }
    }
  }

  for (let i = 0; i < password.value.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (password.value[i].toLowerCase() == alphabet[j]) {
        checkAlphabet = true;
        break;
      }
    }
  }

  if (checkNumber && checkAlphabet) {
    return true;
  } else {
    return false;
  }
}

function checkEmail() {
  let checkAt = false;
  let countAt = 0;

  for (let i = 0; i < email.value.length; i++) {
    if (email.value[i] == "@") {
      countAt++;
    }

    if (countAt >= 2) {
      checkAt = true;
    }
  }

  if (email.value[0] == "@") {
    return false;
  } else if (!email.value.endsWith("@gmail.com") && !email.value.endsWith("@yahoo.com")) {
    return false;
  } else if (checkAt) {
    return false;
  }

  return true;
}

function register() {
  if (username.value == "") {
    alert("Username cannot be empty");
  } else if (fullname.value == "") {
    alert("Fullname cannot be empty");
  } else if (email.value == "") {
    alert("Email cannot be empty");
  } else if (password.value == "") {
    alert("Password cannot be empty");
  } else if (address.value == "") {
    alert("Address cannot be empty");
  } else {
    let boolFullname = checkFullname();
    let boolPassword = checkPassword();
    let boolEmail = checkEmail();

    if (boolFullname == false) {
      alert("Fullname cannot be filled by number");
    } else if (password.value.length < 8) {
      alert("Password length cannot less than 8 characters");
    } else if (boolPassword == false) {
      alert("Password should be alphanumeric");
    } else if (boolEmail == false) {
      alert("Please input valid email");
    } else {
      username.value = "";
      password.value = "";
      email.value = "";
      fullname.value = "";
      address.value = "";
      alert("Successfully register an account");
    }
  }
}

function validate() {
  if (email.value == "") {
    alert("Email cannot be empty");
  } else if (password.value == "") {
    alert("Password cannot be empty");
  } else {
    let boolPassword = checkPassword();
    let boolEmail = checkEmail();
  }
  if (password.value.length < 8) {
    alert("Password length cannot less than 8 characters");
  } else if (boolPassword == false) {
    alert("Password should be alphanumeric");
  } else if (boolEmail == false) {
    alert("Please input valid email");
  } else {
    password.value = "";
    email.value = "";
    alert("Successfully register an account");
  }
}
