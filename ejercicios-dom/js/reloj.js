export default function relojAlarma(
  btnStarReloj,
  btnStopReloj,
  btnStarAlarma,
  btnStopAlarma
) {
  let interval;
  const $divReloj = document.querySelector(".reloj");
  const $audio = document.querySelector("audio");
  // const $audio = document.createElement("audio");
  // $audio.src = "../sounds/perforar_1.mp3";

  document.addEventListener("click", (e) => {
    if (e.target.matches(btnStarReloj)) {
      reloj();
      interval = setInterval(reloj, 1000);
      document.querySelector(btnStarReloj).disabled = true;
    }

    if (e.target.matches(btnStopReloj)) {
      clearInterval(interval);
      document.querySelector(btnStarReloj).disabled = false;
      $divReloj.innerHTML = `00:00:00`;
    }

    if (e.target.matches(btnStarAlarma)) {
      $audio.play();
      document.querySelector(btnStarAlarma).disabled = true;
    }

    if (e.target.matches(btnStopAlarma)) {
      $audio.pause();
      $audio.currentTime = 0;
      document.querySelector(btnStarAlarma).disabled = false;
    }
  });
}

function reloj() {
  const $divReloj = document.querySelector(".reloj");
  let hora = new Date();
  $divReloj.innerHTML = hora.toLocaleTimeString();
}
