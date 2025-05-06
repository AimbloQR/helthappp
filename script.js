function togglePreference(preference) {
    const buttons = document.querySelectorAll('.toggle-btn');
    const vegContent = document.querySelectorAll('.meal-content.veg');
    const nonvegContent = document.querySelectorAll('.meal-content.nonveg');
  
    buttons.forEach(button => {
      button.classList.remove('active');
      if (button.textContent.toLowerCase().includes(preference)) {
        button.classList.add('active');
      }
    });
  
    if (preference === 'veg') {
      vegContent.forEach(content => content.classList.remove('hidden'));
      nonvegContent.forEach(content => content.classList.add('hidden'));
    } else {
      vegContent.forEach(content => content.classList.add('hidden'));
      nonvegContent.forEach(content => content.classList.remove('hidden'));
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    togglePreference('veg');
  });
  