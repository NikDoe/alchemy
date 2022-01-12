import './styles/main.scss';
import "@fortawesome/fontawesome-free/js/fontawesome.js";
import "@fortawesome/fontawesome-free/js/solid.js";
import "@fortawesome/fontawesome-free/js/brands.js";
import "@fortawesome/fontawesome-free/js/all";

const mask = document.querySelector('.mask');
const open = document.querySelector('.search-content__filter')
const openFilter = document.querySelector('.search-content__filter-active')
const openDropDown = document.querySelector('.name-block')
const dropDown = document.querySelector('.dropdown-menu')

document.addEventListener('DOMContentLoaded', () => {
  mask.style.display = 'flex';
  init();
})

open.addEventListener("click", function() {
  console.log('click');
  open.classList.toggle("filter-active");
  openFilter.classList.toggle("none");
})

openDropDown.addEventListener("click", function() {
  dropDown.classList.toggle("open-dropdown")
})

function init() {
  const circle = document.querySelector('.progress-ring-circle');
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;

  const rate = document.querySelector('.rate');

  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = circumference.toString();

  function counter(ms){
    let counter = 0;
    let interval = setInterval(() => {
      rate.textContent = `${++counter}%`;
      const offSet = circumference - counter / 100 * circumference;
      circle.style.strokeDashoffset = offSet.toString();
      if ( counter === 100) {
        clearInterval(interval)
        setTimeout(() => {
          mask.style.display = 'none';
        }, 1000);
      }
    }, ms)
  }
  counter(50);
}



