import './styles/main.scss';

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
        mask.classList.add('hide');
      }
    }, ms)
  }
  counter(50)
})();



