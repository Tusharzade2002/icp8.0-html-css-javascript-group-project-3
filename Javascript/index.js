let slideIndex = 0;
const totalSlides = 3; // Number of slides

function showSlide(index) {
  const slider = document.getElementById('slider');
  const slideWidth = document.getElementById('slide1').clientWidth;
  slider.style.transform = `translateX(${-index * slideWidth}px)`;
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  }
  showSlide(slideIndex);
}

// Automatic slide change (optional)
setInterval(() => {
  nextSlide();
}, 3000); 