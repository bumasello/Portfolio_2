const carousel = document.querySelector(".carousel");
const carouselInner = carousel.querySelector(".carousel-inner");
const slides = carouselInner.querySelectorAll(".slide");
const prevButton = carousel.querySelector(".prev");
const nextButton = carousel.querySelector(".next");

let currentIndex = 0;

// Ocultar todos os slides, exceto o primeiro
for (let i = 1; i < slides.length; i++) {
  slides[i].classList.add("hidden");
}

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

function updateCarousel() {
  const slideWidth = slides[0].offsetWidth;
  const translateX = -currentIndex * slideWidth;
  carouselInner.style.transform = `translateX(${translateX}px)`;

  // Adicionar classe "hidden" para ocultar slides não selecionados
  slides.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.classList.remove("hidden");
    } else {
      slide.classList.add("hidden");
    }
  });
}
