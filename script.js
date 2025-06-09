const form = document.getElementById("registration-form");
const feedbackDiv = document.getElementById("form-feedback");

form.addEventListener((e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let isValid = true;
  const messages = [];

  if (username.length < 3) {
    isValid = false;
    messages.push("Please enter a username that's 3 or more characters long");
  }
});
