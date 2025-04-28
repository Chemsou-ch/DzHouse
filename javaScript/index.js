
document.addEventListener('DOMContentLoaded', function() {
 
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
      
      
      window.location.href = `search.html?location=${encodeURIComponent(name)}&checkin=${arriveDate}&checkout=${outDate}`;
    });
  }
  

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
