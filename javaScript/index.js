// Home page specific functionality
document.addEventListener('DOMContentLoaded', function() {
  // Search form validation
  const searchForm = document.querySelector('.home-form form');
  if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = searchForm.querySelector('input[placeholder="name"]').value;
      const arriveDate = searchForm.querySelector('input[placeholder="arrive date"]').value;
      const outDate = searchForm.querySelector('input[placeholder="out date"]').value;
      
      if (!name || !arriveDate || !outDate) {
        alert('Please fill in all required fields');
        return;
      }
      
      // Redirect to search page with parameters
      window.location.href = `search.html?location=${encodeURIComponent(name)}&checkin=${arriveDate}&checkout=${outDate}`;
    });
  }
  
  // House listing hover effects
  const houses = document.querySelectorAll('.house');
  houses.forEach(house => {
    house.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.02)';
      this.style.transition = 'transform 0.3s ease';
    });
    
    house.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
});