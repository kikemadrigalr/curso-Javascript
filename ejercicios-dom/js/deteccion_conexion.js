export default function networkStatus(onLine, offLine) {
  const $onLine = document.getElementById(onLine),
    $offLine = document.getElementById(offLine);

  window.addEventListener("online", () => {
    if (navigator.onLine) $onLine.classList.add("visible");

    setTimeout(() => {
      $onLine.classList.remove("visible");
    }, 5000);
  });

  window.addEventListener("offline", (e) => {
    if (!navigator.onLine) $offLine.classList.add("visible");

    setTimeout(() => {
      $offLine.classList.remove("visible");
    }, 5000);
  });
}
