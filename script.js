//Sign In input alert
function signIn() {
  // Get values from input fields
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Check if all required fields are filled
  if (email === '' || password === '') {
      alert('Please fill in all fields');
  } else {
      // Simulate a successful login
      alert('Successfully logged in!');
      
      // Redirect to index.html
      setTimeout(function(){
          window.location.href = 'index.html';
      });
  }
}

 //Sign Up input alert
function signup() {
  // Get values from input fields
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Check if all required fields are filled
  if (email === '' || password === '' || name === '') {
      alert('Please fill in all fields');
  } else {
      // Simulate a successful login
      alert('Successfully logged in!');
      
      // Redirect to index.html
      setTimeout(function(){
          window.location.href = 'index.html';
      });
  }
}

//Contact Form

function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var phone = document.getElementById('phone').value;

    if (name === '' || email === '' || message === '' || phone ==='') {
     // If any field is empty, show an error message
        alert('Please fill out all fields before submitting the form.');
      } else {
        // If all fields are filled, show a success message
        alert('Congratulations! Your form has been submitted successfully.');
        
        // Redirect to the home page after a successful submission
        window.location.href = 'index.html'; // Change 'home.html' to the actual URL of your home page
      }
    }

    // About Us Counting

  