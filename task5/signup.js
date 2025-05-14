document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission
  
    // Simple popup
    alert("You have successfully registered!");
  
    // You can optionally reset the form
    this.reset();
  });
  