// Property details page functionality
document.addEventListener('DOMContentLoaded', function() {
  // Image gallery functionality
  const mainImage = document.querySelector('.principle-img img');
  const thumbnails = document.querySelectorAll('.other-img img');
  
  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
      // Swap main image with clicked thumbnail
      const tempSrc = mainImage.src;
      mainImage.src = this.src;
      this.src = tempSrc;
    });
  });
  
  // Booking button
  const bookingBtn = document.querySelector('.bookingBtn button');
  if (bookingBtn) {
    bookingBtn.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Check if user is logged in (simplified)
      const isLoggedIn = localStorage.getItem('userToken'); // In a real app
      
      if (!isLoggedIn) {
        if (confirm('You need to log in to book. Go to login page?')) {
          window.location.href = 'Register.html';
        }
        return;
      }
      
      // Proceed with booking
      alert('Booking initiated! Redirecting to payment...');
      // In a real app, redirect to booking/payment page
    });
  }
  
  // Review functionality
  const reviews = document.querySelectorAll('.review div');
  reviews.forEach(review => {
    review.addEventListener('click', function() {
      // Show full review or allow user to add their own
      console.log('Review clicked:', this.querySelector('p').textContent);
    });
  });
});