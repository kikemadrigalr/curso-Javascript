export default function isDarkMode(btnDark, btnIcon) {
  const $btnDark = document.querySelector(btnDark),
    $btnIcon = document.querySelector(btnIcon);

  $btnDark.addEventListener("click", (e) => {
    document.body.classList.toggle("is-dark-mode");

    if ($btnIcon.classList.contains("fa-moon")) {
      $btnIcon.classList.remove("fa-moon");
      $btnIcon.classList.add("fa-sun");
    } else {
      $btnIcon.classList.remove("fa-sun");
      $btnIcon.classList.add("fa-moon");
    }
  });
}
