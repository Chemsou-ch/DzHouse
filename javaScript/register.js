// Registration page functionality
document.addEventListener('DOMContentLoaded', function() {
  const registerForm = document.querySelector('.subscription form');
  
  if (registerForm) {
    // Change checkboxes to radio buttons for user type
    const userTypeInputs = registerForm.querySelectorAll('.type input');
    userTypeInputs.forEach(input => {
      input.type = 'radio';
      input.name = 'userType';
    });
    
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      
      const userType = registerForm.querySelector('input[name="userType"]:checked');
      const name = registerForm.querySelector('input[placeholder="Name"]').value;
      const familyName = registerForm.querySelector('input[placeholder="Family name"]').value;
      const phone = registerForm.querySelector('input[placeholder="Phone"]').value;
      const email = registerForm.querySelector('input[placeholder="Email"]').value;
      const password = registerForm.querySelector('input[placeholder="password"]').value;
      
      // Validate
      if (!userType || !name || !familyName || !phone || !email || !password) {
        if(userType == )
        alert('Please fill in all required fields');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
      }
      
      // Password validation
      if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
      }
      
      // In a real app, submit to API
      const userData = {
        userType: userType.id,
        name,
        familyName,
        phone,
        email,
        password // In a real app, this would be hashed
      };
      
      console.log('Registration data:', userData);
      alert('Registration successful! Redirecting...');
      
      // Redirect based on user type
      window.location.href = userType.id === 'Owner' ? 'Owner.html' : 'Tenet.html';
    });
  }
});