// scroll to top
const scrollBtn = document.querySelector('.scroll-to-top');
window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 400 ? 'flex' : 'none';
});
scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// theme toggle
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});
if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark');

// year
document.getElementById('year').textContent = new Date().getFullYear();

// logo animation start
window.addEventListener('load', () => {
  const logo = document.querySelector('.logo');
  logo.style.animationPlayState = 'running';
});
