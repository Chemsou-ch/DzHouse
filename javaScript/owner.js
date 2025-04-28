
document.addEventListener('DOMContentLoaded', function() {

  const profileForm = document.querySelector('.formuler form');
  if (profileForm) {
    profileForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
  
      const name = profileForm.querySelector('input[placeholder="Name"]').value;
      const familyName = profileForm.querySelector('input[placeholder="Family name"]').value;
      const phone = profileForm.querySelector('input[placeholder="Phone Number"]').value;
      const email = profileForm.querySelector('input[placeholder="email"]').value;
      
      if (!name || !familyName || !phone || !email) {
        alert('Please fill in all required fields');
        return;
      }
      

      localStorage.setItem('ownerProfile', JSON.stringify({
        name, familyName, phone, email
      }));
      
      alert('Profile updated successfully!');
    });
  }
  

  const messageForm = document.querySelector('.contact');
  if (messageForm) {
    messageForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const message = messageForm.querySelector('textarea').value;
      
      if (!message.trim()) {
        alert('Please enter a message');
        return;
      }
      
      alert('Message sent to tenant!');
      messageForm.querySelector('textarea').value = '';
    });
  }
  
 
  const updateButtons = document.querySelectorAll('.update button');
  updateButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      if (e.target.closest('a')) return;
      
      const row = this.closest('tr');
      const announcementId = row.querySelector('td:first-child').textContent;
      
      if (this.textContent.includes('Done') || this.querySelector('img[alt="Done"]')) {
   
        alert(`Announcement ${announcementId} marked as complete`);
      } else {
        // Edit action
        console.log(`Editing announcement ${announcementId}`);
      }
    });
  });
});
