export default function isDarkMode(btnDark, btnIcon) {
  const $btnDark = document.querySelector(btnDark),
    $btnIcon = document.querySelector(btnIcon);

  const darkMode = () => {
    document.body.classList.add("is-dark-mode");
    $btnIcon.classList.remove("fa-moon");
    $btnIcon.classList.add("fa-sun");
    localStorage.setItem("theme", "dark");
  };

  const lightMode = () => {
    document.body.classList.remove("is-dark-mode");
    $btnIcon.classList.remove("fa-sun");
    $btnIcon.classList.add("fa-moon");
    localStorage.setItem("theme", "light");
  };

  $btnDark.addEventListener("click", (e) => {
    if ($btnIcon.classList.contains("fa-moon")) {
      darkMode();
    } else {
      lightMode();
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === null)
      localStorage.setItem("theme", "light");

    if (localStorage.getItem("theme" === "light")) lightMode();

    if (localStorage.getItem("theme") === "dark") darkMode();
  });
}
