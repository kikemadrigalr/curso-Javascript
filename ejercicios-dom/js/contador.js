export default function contador(counter) {
  const $divCounter = document.querySelector(counter);

  let next = new Date(2022, 10, 21).getTime(),
    // next = new Date(2020, 9, 5).getTime(),
    // diffSeconds = (next - today) / 1000,
    days,
    hours,
    minutes,
    seconds;

  const message = `
    <img src="../assets/mundial_fifa.png" alt="Mundial Fifa 2022" width="100" height="200">
    <h3>Copa Mundial De la Fifa 2022</h3>`;

  const interval = setInterval(() => {
    let today = new Date().getTime(),
      diffSeconds = (next - today) / 1000;

    days = parseInt(diffSeconds / 86400);
    diffSeconds = diffSeconds % 86400;
    hours = parseInt(diffSeconds / 3600);
    diffSeconds = diffSeconds % 3600;
    minutes = parseInt(diffSeconds / 60);
    seconds = parseInt(diffSeconds % 60);
    // (days = 0), (hours = 0), (minutes = 0), (seconds = 0);

    if (seconds === 0 && minutes === 0 && hours === 0 && days === 0) {
      $divCounter.innerHTML = message;
      clearInterval(interval);
    } else {
      $divCounter.innerHTML = `${days} Días, ${hours} Horas, ${minutes} Minutos , ${seconds} Segundos`;
    }
  }, 1000);
}
