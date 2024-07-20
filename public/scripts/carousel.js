const carousel = document.getElementById('carousel');
const items = carousel.getElementsByClassName('carousel-item');

let angle = 0;
const angleIncrement = 360 / items.length;

function updateCarousel() {
  for (let i = 0; i < items.length; i++) {
    items[i].style.transform = `rotateY(${angle + i * angleIncrement}deg) translateZ(300px)`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateCarousel();
  setInterval(() => {
    angle -= angleIncrement;
    updateCarousel();
  }, 3000);
});

