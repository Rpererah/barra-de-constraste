const body = document.body;
const contrastMore = document.getElementById('contrastMore');
const contrastLess = document.getElementById('contrastLess');
const contrastLevel = document.getElementById('contrastLevel');
let contrastValue = 100;

contrastMore.addEventListener('click', () => {
  contrastValue += 10;
  if (contrastValue > 150) {
    contrastValue = 150;
  }
  body.style.filter = `contrast(${contrastValue}%)`;
  contrastLevel.textContent = `${contrastValue}%`;
});

contrastLess.addEventListener('click', () => {
  contrastValue -= 10;
  if (contrastValue < 50) {
    contrastValue = 50;
  }
  body.style.filter = `contrast(${contrastValue}%)`;
  contrastLevel.textContent = `${contrastValue}%`;
});