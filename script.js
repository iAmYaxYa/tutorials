let form = document.querySelector("form"),
  userName = document.querySelector("form #user-name"),
  email = document.querySelector("form #email"),
  password = document.querySelector("form #password"),
  confirmPassword = document.querySelector("form #confirm-pass"),
  eyes = document.querySelectorAll(".eye");

// USER NAME CHECK FUNCTION
function userNameCheck() {
  let successUserName = document.querySelector(".success.username");
  let errorUserName = document.querySelector(".error.username");
  if (userName.value.trim() == "") {
    errorUserName.classList.add("show");
    userName.classList.add("show");
    errorUserName.innerHTML = `<i class="bx bx-error-circle"></i> Please enter user name`;
  } else if (userName.value.length < 3) {
    successUserName.classList.remove("show");
    errorUserName.classList.add("show");
    userName.classList.add("show");
    errorUserName.innerHTML = `<i class="bx bx-error-circle"></i> Please enter at least 3 characters`;
  } else if (userName.value.length >= 3) {
    errorUserName.classList.remove("show");
    successUserName.classList.add("show");
    userName.classList.remove("show");
  }
  if (userName.value.length > 15) {
    successUserName.classList.remove("show");
    errorUserName.classList.add("show");
    userName.classList.add("show");
    errorUserName.innerHTML = `<i class="bx bx-error-circle"></i> Please enter maximum 15 characters`;
  }
}

// USERNAME EVENT LISTENER
userName.addEventListener("keyup", userNameCheck);

// EMAIL CHECK FUNCTION
function emailCheck() {
  let successEmail = document.querySelector(".success.email");
  let errorEmail = document.querySelector(".error.email");
  let regularExpression =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.value.trim() == "") {
    errorEmail.classList.add("show");
    email.classList.add("show");
    errorEmail.innerHTML = `<i class="bx bx-error-circle"></i> Please enter email`;
  } else if (regularExpression.test(email.value.trim())) {
    errorEmail.classList.remove("show");
    email.classList.remove("show");
    successEmail.classList.add("show");
  } else {
    errorEmail.classList.add("show");
    email.classList.add("show");
    successEmail.classList.remove("show");
    errorEmail.innerHTML = `<i class="bx bx-error-circle"></i> Please enter a valid email`;
  }
}

// EMAIL EVENT LISTENER
email.addEventListener("input", emailCheck);

// PASSWORD CHECK FUNCTION
function passwordCheck() {
  let errorPassword = document.querySelector(".error.password");
  if (password.value.trim() == "") {
    errorPassword.classList.add("show");
    password.classList.add("show");
    errorPassword.innerHTML = `<i class="bx bx-error-circle"></i> Please enter password`;
  } else if (password.value.length < 5) {
    errorPassword.classList.add("show");
    password.classList.add("show");
    errorPassword.innerHTML = `<i class="bx bx-error-circle"></i> Please enter at least 6 characters or numbers and symbol`;
  } else if (password.value.length > 6) {
    errorPassword.classList.remove("show");
    password.classList.remove("show");
  }
  if (password.value.length > 12) {
    errorPassword.classList.add("show");
    password.classList.add("show");
    errorPassword.innerHTML = `<i class="bx bx-error-circle"></i> Please enter maximum 12 characters or numbers and symbol`;
  }
}

// PASSWORD EVENT LISTENER
password.addEventListener("keyup", passwordCheck);

// CONFIRM PASSWORD CHECK FUNCTION
function confirmPasswordCheck() {
  let errorConfirmPassword = document.querySelector(".error.confirm-pass");
  if (confirmPassword.value.trim() == "") {
    errorConfirmPassword.classList.add("show");
    confirmPassword.classList.add("show");
    errorConfirmPassword.innerHTML = `<i class="bx bx-error-circle"></i> Please enter confirm password`;
  } else if (password.value !== confirmPassword.value) {
    errorConfirmPassword.classList.add("show");
    confirmPassword.classList.add("show");
    errorConfirmPassword.innerHTML = `<i class="bx bx-error-circle"></i> Password don't match`;
  } else {
    errorConfirmPassword.classList.remove("show");
    confirmPassword.classList.remove("show");
  }
}

// CONFIRM PASSWORD EVENT LISTENER
confirmPassword.addEventListener("keyup", confirmPasswordCheck);

// PASSWORD HIDE AND SHOW
eyes.forEach((eye) => {
  eye.addEventListener("click", (e) => {
    let input = e.target.parentElement.parentElement.children[0];
    let eye = e.target.parentElement;

    if (input.type === "password") {
      input.type = "text";
      eye.innerHTML = `<i class="fa-regular fa-eye"></i>`;
    } else {
      input.type = "password";
      eye.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`;
    }
  });
});

// FORM SUBMIT
form.addEventListener("submit", (e) => {
  e.preventDefault();
  userNameCheck();
  emailCheck();
  passwordCheck();
  confirmPasswordCheck();
});
