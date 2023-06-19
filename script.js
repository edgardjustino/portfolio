const navMenu = document.getElementById('navmenu');
const navToggle = document.getElementById('togglebtn');

function toggle() {
  navMenu.classList.toggle('active-toggle');
  console.log(toggle)
  navToggle.classList.toggle('active-toggle');
}

document.onclick = function (e) {
  if (e.target.id !== 'togglebtn' && e.target.id !== 'navmenu') {
    navMenu.classList.remove('active-toggle');
    navToggle.classList.remove('active-toggle');
  }
};
