import hamburger from "./menu.js";
import relojAlarma from "./reloj.js";
import { mover, alertas } from "./teclado.js";
import contador from "./contador.js";

document.addEventListener("DOMContentLoaded", (e) => {
  hamburger();
  relojAlarma(
    "#iniciar-reloj",
    "#stop-reloj",
    "#iniciar-alarma",
    "#stop-alarma"
  );
  mover("#camp", "#ball");
  alertas();
  contador(".counter");
});
