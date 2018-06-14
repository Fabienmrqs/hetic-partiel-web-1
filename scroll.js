var scroll = window.scrollY;
var header = document.getElementById('header');

var toggle = function() {
  //   if (scroll < scrollY) {
  //     header.classList.add('navbar--hidden');
  //     // header.style.transform = "translateY(0%)";
  //   } else {
  //     // header.style.transform = "translateY(-100%)";
  //     header.classList.remove('navbar--hidden');
  //   }
  header.classList.toggle('navbar--hidden', scroll < scrollY);
  scroll = scrollY;
};

window.onscroll = toggle;
window.onload = toggle;
window.onrisize = toggle;
