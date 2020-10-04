import hamburger from "./menu.js";
import relojAlarma from "./reloj.js";
import { mover, alertas } from "./teclado.js";

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
});
