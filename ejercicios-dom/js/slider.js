export default function slider() {
  const $slides = document.querySelectorAll(".slides"),
    $prev = document.querySelector(".prev"),
    $next = document.querySelector(".next");

  let slideIndex = 0;

  // const showNextSlide = (nextSlide) => {};

  // const showPrevSlide = (prevSlide) => {};

  // $slides[slideIndex].style.display = "block";

  document.addEventListener("click", (e) => {
    if (e.target === $prev) {
      $slides[slideIndex].classList.remove("active");

      slideIndex--;

      if (slideIndex < 0) {
        slideIndex = $slides.length - 1;
      }

      $slides[slideIndex].classList.add("active");
    }

    if (e.target === $next) {
      $slides[slideIndex].classList.remove("active");

      slideIndex++;

      if (slideIndex >= $slides.length) {
        slideIndex = 0;
      }

      $slides[slideIndex].classList.add("active");
    }
  });
}
