
document.addEventListener('DOMContentLoaded', function() {

  const mainImage = document.querySelector('.principle-img img');
  const thumbnails = document.querySelectorAll('.other-img img');
  
  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
  
      const tempSrc = mainImage.src;
      mainImage.src = this.src;
      this.src = tempSrc;
    });
  });
  

  const bookingBtn = document.querySelector('.bookingBtn button');
  if (bookingBtn) {
    bookingBtn.addEventListener('click', function(e) {
      e.preventDefault();
      
      const isLoggedIn = localStorage.getItem('userToken'); 
      
      if (!isLoggedIn) {
        if (confirm('You need to log in to book. Go to login page?')) {
          window.location.href = 'Register.html';
        }
        return;
      }
      
 
      alert('Booking initiated! Redirecting to payment...');
 
    });
  }
  

  const reviews = document.querySelectorAll('.review div');
  reviews.forEach(review => {
    review.addEventListener('click', function() {
      // Show full review or allow user to add their own
      console.log('Review clicked:', this.querySelector('p').textContent);
    });
  });
});
