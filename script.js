document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".navbar a");
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    });
  });
});

let currentSlide = 0;

function changeSlide(direction) {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.style.transform = "translateX(0)";
    } else {
      slide.style.transform = "translateX(100%)";
    }
  });

  if (direction === 1) {
    slides[(currentSlide - 1 + totalSlides) % totalSlides].style.transform =
      "translateX(-100%)";
  } else {
    slides[(currentSlide + 1) % totalSlides].style.transform =
      "translateX(100%)";
  }
}
