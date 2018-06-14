var container = document.querySelector('.container');
var change = document.querySelector('.change');
var mobilenav = document.querySelector('.mobilenav');

container.addEventListener('click', function() {
  mobilenav.classList.toggle('mobilenav--isactive');
  if ((mobilenav.style.display = 'block')) {
    document.body.style.overflow = 'hidden';
  } else if ((mobilenav.style.display = 'none')) {
    document.body.style.overflow = 'visible';
  }
});

change.addEventListener('click', function() {
  mobilenav.style.display = 'none';
});
