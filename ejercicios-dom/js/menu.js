function hamburger() {
  const $btnHamburger = document.querySelector(".hamburger"),
    $nav = document.querySelector(".nav");

  $btnHamburger.addEventListener("click", () => {
    $btnHamburger.classList.toggle("is-active");
    $nav.classList.toggle("show");
  });

  $nav.addEventListener("click", () => {
    $nav.classList.remove("show");
    $btnHamburger.classList.toggle("is-active");
  });
}

hamburger();
