document.addEventListener('DOMContentLoaded', function () {
  let currentIndex = 0;
  const slides = document.querySelectorAll('.carousel-slide');
  const totalSlides = slides.length;

  function showSlide(index) {
    const carouselContainer = document.querySelector('.carousel-container');
    const offset = -index * 100; // Calculate the offset based on index
    carouselContainer.style.transform = `translateX(${offset}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Cycle through slides
    showSlide(currentIndex);
  }

  // Change slide every 3 seconds
  setInterval(nextSlide, 6000);

  // Initial display
  showSlide(currentIndex);
});
