
document.addEventListener('DOMContentLoaded', function() {

  const navLinks = document.querySelectorAll('.nav-links a');
  const currentPage = window.location.pathname.split('/').pop();
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

 
  const menuToggle = document.createElement('div');
  menuToggle.className = 'menu-toggle';
  menuToggle.innerHTML = '☰';
  document.querySelector('header').appendChild(menuToggle);
  
  menuToggle.addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
  });


  document.addEventListener('click', function(e) {
    if (!e.target.closest('.nav-links') && !e.target.closest('.menu-toggle')) {
      document.querySelector('.nav-links').classList.remove('active');
    }
  });

  const fileInputs = document.querySelectorAll('input[type="file"]');
  fileInputs.forEach(input => {
    input.addEventListener('change', function() {
      const label = this.nextElementSibling;
      if (this.files.length > 0) {
        label.textContent = this.files[0].name;
      } else {
        label.textContent = label.getAttribute('data-original-text') || 'Choose file';
      }
    });
    
  
    const label = input.nextElementSibling;
    label.setAttribute('data-original-text', label.textContent);
  });
});
