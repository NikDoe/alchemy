import './styles/main.scss';
import "@fortawesome/fontawesome-free/js/fontawesome.js";
import "@fortawesome/fontawesome-free/js/solid.js";
import "@fortawesome/fontawesome-free/js/brands.js";
import "@fortawesome/fontawesome-free/js/all";

(function() {
  const mask = document.querySelector('.mask');
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
          mask.classList.add('hide');
        }, 1000);
      }
    }, ms)
  }
  counter(1000);
})();



