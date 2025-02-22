function checkPassword(event) {
    event.preventDefault(); // Prevent form submission
  
    var password = document.getElementById("password").value;
    var correctPassword = "yourpassword"; // Change this to your actual password
  
    if (password === correctPassword) {
      // Show protected content and hide the password form
      document.getElementById("content").style.display = "block";
      document.getElementById("password-form").style.display = "none";
    } else {
      // Show error message and contact info
      document.getElementById("error-message").textContent = "Incorrect password. Please try again.";
      document.getElementById("contact-info").style.display = "block";
    }
  }
  