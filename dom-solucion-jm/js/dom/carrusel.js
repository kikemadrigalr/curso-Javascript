const d = document;

export default function slider() {
  const $next = d.querySelector(".slider-btns .next"),
    $prev = d.querySelector(".slider-btns .prev"),
    $sliders = d.querySelectorAll(".slider-slide");

  let i = 0;

  d.addEventListener("click", (e) => {
    if (e.target === $prev) {
      e.preventDefault();
      $sliders[i].classList.remove("active");
      i--;

      if (i < 0) {
        i = $sliders.length - 1;
      }

      $sliders[i].classList.add("active");
    }

    if (e.target === $next) {
      e.preventDefault();
      $sliders[i].classList.remove("active");
      i++;

      if (i >= $sliders.length) {
        i = 0;
      }

      $sliders[i].classList.add("active");
    }
  });
}
