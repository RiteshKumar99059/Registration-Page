const form = document.getElementById('registrationForm');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // stop form from refreshing

  // get values from input fields
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirmPassword').value.trim();

  // check if email is valid
  if (!validateEmail(email)) {
    showMessage("Please enter a valid email address.", "red");
    return;
  }

  // check if password is long enough
  if (password.length < 6) {
    showMessage("Password must be at least 6 characters.", "red");
    return;
  }

  // check if passwords match
  if (password !== confirmPassword) {
    showMessage("Passwords do not match.", "red");
    return;
  }

  // everything good, show success
  showMessage("You are registered successfully!", "green");
  form.reset(); // clear the form
});

// simple function to check email pattern
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// show message in the page
function showMessage(msg, color) {
  messageDiv.textContent = msg;
  messageDiv.style.color = color;
}
