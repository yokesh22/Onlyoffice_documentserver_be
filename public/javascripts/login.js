
    // Function to validate an email address
    function validateEmail(email) {
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
  
    // Function to handle form submission
    function validateForm() {
      var usernameInput = document.getElementById('username');
      var pass = document.getElementById('password');
      var email = usernameInput.value.trim();

      if(validateEmail(email) && pass.value){
        console.log("authenticated...")
        window.history.replaceState(null, null, "/docManager");
        window.location.href = "http://localhost:3000/courses";
      }else  if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
      }else  if (!pass.value) {
        alert('Please enter a password');
      }
  
        // window.location.href = "http://localhost:3000/docManager";

    
    }


   

  