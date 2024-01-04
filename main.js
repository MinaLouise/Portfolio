window.addEventListener('scroll', function() {
  var content = document.querySelector('.pagecontent');
  var intro = document.querySelector('.intro');
  var introPosition = intro.getBoundingClientRect().top;
  var screenPosition = window.innerHeight;

  if (introPosition < screenPosition / 2) {
    content.classList.add('visible');
  } else {
    content.classList.remove('visible');
  }
});
