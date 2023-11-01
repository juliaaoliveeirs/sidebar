const menu = document.querySelector('.menu');
const sidebar = document.querySelector('.sidebar');

function toggleMenu() {
  sidebar.classList.toggle('close');
}

if (menu && sidebar) {
  menu.addEventListener('click', toggleMenu);
}
