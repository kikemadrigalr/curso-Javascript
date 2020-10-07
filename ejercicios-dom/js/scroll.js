export default function scrollTop(btnScroll) {
  const $btnScroll = document.querySelector(btnScroll);

  window.addEventListener("scroll", (e) => {
    if (window.scrollY > 600) {
      $btnScroll.classList.add("visible");
    }

    if (window.scrollY < 600) {
      $btnScroll.classList.remove("visible");
    }
  });

  $btnScroll.addEventListener("click", (e) => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
}
