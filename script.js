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

  if (!email.includes("@") || !email.includes(".")) {
    isValid = false;
    messages.push("Please include '@' and '.' in your email");
  }

  if (password.length < 8) {
    isValid = false;
    messages.push("Password should be 8 or more characters long");
  }

  feedbackDiv.style.display = "block";

  if (isValid) {
    feedbackDiv.textContent = "Registration successful!";
    feedbackDiv.style.color = "#28a745";
  }
});
