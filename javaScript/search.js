// Search page functionality
document.addEventListener('DOMContentLoaded', function() {
  // Get search parameters from URL
  const urlParams = new URLSearchParams(window.location.search);
  const location = urlParams.get('location');
  const checkin = urlParams.get('checkin');
  const checkout = urlParams.get('checkout');
  
  // Populate search form if parameters exist
  if (location || checkin || checkout) {
    const searchForm = document.querySelector('.home-form form');
    if (location) searchForm.querySelector('input[placeholder="name"]').value = location;
    if (checkin) searchForm.querySelector('input[placeholder="arrive date"]').value = checkin;
    if (checkout) searchForm.querySelector('input[placeholder="out date"]').value = checkout;
  }
  
  // Filter functionality
  const filterForm = document.querySelector('aside');
  if (filterForm) {
    filterForm.addEventListener('change', function() {
      const sorting = filterForm.querySelector('#sorting').value;
      const minPrice = filterForm.querySelector('input[placeholder="Min number"]').value;
      const maxPrice = filterForm.querySelector('input[placeholder="Max number"]').value;
      const parking = filterForm.querySelector('#parking').checked;
      const wifi = filterForm.querySelector('#wifi').checked;
      const air = filterForm.querySelector('#air').checked;
      
      // In a real app, this would filter results from an API
      console.log('Applying filters:', { sorting, minPrice, maxPrice, parking, wifi, air });
    });
  }
  
  // Listing click tracking
  const listings = document.querySelectorAll('.annonce');
  listings.forEach(listing => {
    listing.addEventListener('click', function() {
      // Track which listing was clicked (analytics)
      const title = this.querySelector('h3').textContent;
      console.log('Listing clicked:', title);
    });
  });
});