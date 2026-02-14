
const slides = document.querySelector('.slides');
const slideElements = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev'); 
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const totalSlides = slideElements.length;

function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextButton.addEventListener('click', function () {
  currentIndex++;

  if (currentIndex >= totalSlides) {
    currentIndex = 0; 
  }

  updateSlidePosition();
});

prevButton.addEventListener('click', function () { 
    currentIndex--; 
    
    if (currentIndex < 0) { 
        currentIndex = totalSlides - 1;
    } 
    updateSlidePosition(); 
});
