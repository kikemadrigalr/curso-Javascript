export function alertas() {
  document.addEventListener("keydown", (e) => {
    if (e.altKey && e.key === "a") {
      alert("Haz ejecutado una alerta desde tu teclado");
    }

    if (e.altKey && e.key === "p") {
      prompt("Haz ejecutado un Promp desde tu teclado");
    }

    if (e.altKey && e.key === "c") {
      confirm("Haz ejecutado un Confirm desde tu teclado");
    }
  });
}

export function mover(camp, ball) {
  const $campEl = document.querySelector(camp),
    $ballEl = document.querySelector(ball),
    square = $campEl.getBoundingClientRect(),
    bola = $ballEl.getBoundingClientRect();

  let desplazamiento = 10;
  const heightDif = square.height - bola.height - desplazamiento - 2,
    widthDif = square.width - bola.width - desplazamiento - 2;

  let x = 0,
    y = 0;

  console.log(square);

  $campEl.addEventListener("click", (e) => {
    $ballEl.style.opacity = 1;

    document.addEventListener("keydown", (e) => {
      e.preventDefault();

      if (e.key === "ArrowDown") {
        if (y < heightDif) {
          y = y + desplazamiento;
          $ballEl.style.left = `${x}px`;
          $ballEl.style.top = `${y}px`;
        }
      }

      if (e.key === "ArrowUp") {
        if (y > 0) {
          y = y - desplazamiento;
          $ballEl.style.left = `${x}px`;
          $ballEl.style.top = `${y}px`;
        }
      }

      if (e.key === "ArrowLeft") {
        if (x > 0) {
          x = x - desplazamiento;
          $ballEl.style.left = `${x}px`;
          $ballEl.style.top = `${y}px`;
        }
      }

      if (e.key === "ArrowRight") {
        if (x < widthDif) {
          x = x + desplazamiento;
          $ballEl.style.left = `${x}px`;
          $ballEl.style.top = `${y}px`;
        }
      }
    });
  });
}
