export default function digitalGiveaway(btn, listado) {
  const $pListado = document.getElementById(listado),
    $spiner = document.querySelector(".fa-spinner");
  console.log($pListado);

  const teams = [
    "Real Madrid",
    "Barcelona",
    "Bayern Munich",
    "Juventus",
    "Atletico Madrid",
    "Inter Milan",
    "PSG",
    "Borusia Dormunt",
    "Atalanta",
    "Monaco",
    "Milan",
    "Roma",
  ];

  teams.forEach((team) => {
    const li = document.createElement("li");
    li.innerHTML = `${team}`;
    $pListado.appendChild(li);
  });

  document.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      $pListado.style.visibility = "hidden";
      $spiner.style.display = "inline-block";

      setTimeout(() => {
        const win = Math.floor(Math.random() * teams.length);
        swal(`${teams[win]} Campeón`, `El Ganador Es ${teams[win]}`, "success");
        $spiner.style.display = "none";
        $pListado.style.visibility = "visible";
      }, 3000);
    }
  });
}
