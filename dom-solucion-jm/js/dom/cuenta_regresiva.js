const d = document;
export default function countDown(id, limitDate, finalMessage) {
  const $countdow = d.getElementById(id),
    countDownDate = new Date(limitDate).getTime();

  let countDownTempo = setInterval(() => {
    let now = new Date().getTime(),
      limitTime = countDownDate - now,
      days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
      hours = (
        "0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).slice(-2),
      minutes = (
        "0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
      ).slice(-2),
      seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(-2);

    $countdow.innerHTML = `<h3>Faltan: ${days} Días, ${hours} Horas, ${minutes} Minutos, ${seconds} Segundos</h3>`;

    if (limitTime < 0) {
      clearInterval(countDownTempo);
      $countdow.innerHTML = `<h3>${finalMessage}</h3>`;
    }
  }, 1000);
}
