
document.addEventListener('DOMContentLoaded', function() {

  const urlParams = new URLSearchParams(window.location.search);
  const location = urlParams.get('location');
  const checkin = urlParams.get('checkin');
  const checkout = urlParams.get('checkout');
  

  if (location || checkin || checkout) {
    const searchForm = document.querySelector('.home-form form');
    if (location) searchForm.querySelector('input[placeholder="name"]').value = location;
    if (checkin) searchForm.querySelector('input[placeholder="arrive date"]').value = checkin;
    if (checkout) searchForm.querySelector('input[placeholder="out date"]').value = checkout;
  }
  

  const filterForm = document.querySelector('aside');
  if (filterForm) {
    filterForm.addEventListener('change', function() {
      const sorting = filterForm.querySelector('#sorting').value;
      const minPrice = filterForm.querySelector('input[placeholder="Min number"]').value;
      const maxPrice = filterForm.querySelector('input[placeholder="Max number"]').value;
      const parking = filterForm.querySelector('#parking').checked;
      const wifi = filterForm.querySelector('#wifi').checked;
      const air = filterForm.querySelector('#air').checked;
      
   
      console.log('Applying filters:', { sorting, minPrice, maxPrice, parking, wifi, air });
    });
  }
  
  const listings = document.querySelectorAll('.annonce');
  listings.forEach(listing => {
    listing.addEventListener('click', function() {
      
      const title = this.querySelector('h3').textContent;
      console.log('Listing clicked:', title);
    });
  });
});
