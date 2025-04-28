// Edit/New announcement functionality
document.addEventListener('DOMContentLoaded', function() {
  const editForm = document.querySelector('.edit .formula');
  
  if (editForm) {
    editForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = editForm.querySelector('input[placeholder="Name"]').value;
      const address = editForm.querySelector('input[placeholder="address"]').value;
      const postalCode = editForm.querySelector('input[placeholder="Postal code"]').value;
      const bookingMethod = editForm.querySelector('#bookingMethode').value;
      
      // Get amenities
      const amenities = [];
      if (editForm.querySelector('#Parking').checked) amenities.push('Parking');
      if (editForm.querySelector('#Wifi').checked) amenities.push('Wifi');
      if (editForm.querySelector('#AirCond').checked) amenities.push('Air Conditioning');
      if (editForm.querySelector('#Balcony').checked) amenities.push('Balcony');
      
      // Validate
      if (!name || !address || !postalCode) {
        alert('Please fill in all required fields');
        return;
      }
      
      // In a real app, submit to API
      const announcementData = {
        name,
        address,
        postalCode,
        bookingMethod,
        amenities
      };
      
      console.log('Announcement data:', announcementData);
      alert('Announcement saved successfully!');
      window.location.href = 'Owner.html';
    });
  }
  
  // Image preview functionality
  const imageInput = document.querySelector('.img');
  if (imageInput) {
    imageInput.addEventListener('change', function() {
      if (this.files && this.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
          // Create preview image if it doesn't exist
          let preview = document.querySelector('.img-preview');
          if (!preview) {
            preview = document.createElement('img');
            preview.className = 'img-preview';
            imageInput.parentNode.insertBefore(preview, imageInput.nextSibling);
          }
          preview.src = e.target.result;
          preview.style.maxWidth = '200px';
          preview.style.display = 'block';
        };
        
        reader.readAsDataURL(this.files[0]);
      }
    });
  }
});