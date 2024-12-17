const contactForm = document.getElementById('form');
const email = document.getElementById('email');
const errorMessage = document.getElementById('error-msg');

contactForm.addEventListener('submit', (event) => {
  if (email.value === email.value.toLowerCase()) {
    return true;
  }
  errorMessage.style.display = 'block';
  event.preventDefault();
  return false;
});

errorMessage.style.color = 'Green';
errorMessage.style.fontSize = '100%';
errorMessage.style.fontFamily = 'Inter';
