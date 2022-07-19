const navright = document.querySelector('.navright');
const burger = document.querySelector('.burger');
const closeBtn = document.querySelector('.close-btn');
const navLink = document.querySelectorAll('.nav-link');

burger.onclick = function () {
  navright.classList.toggle('click');
  document.body.style.overflow = 'hidden';
};

closeBtn.onclick = function () {
  navright.classList.remove('click');
  document.body.style.overflow = 'visible';
};

navLink.forEach((link) => {
  link.onclick = function () {
    navright.classList.remove('click');
    document.body.style.overflow = 'visible';
  };
});
