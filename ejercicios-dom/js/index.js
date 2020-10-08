import hamburger from "./menu.js";
import relojAlarma from "./reloj.js";
import { mover, alertas } from "./teclado.js";
import contador from "./contador.js";
import scrollTop from "./scroll.js";
import isDarkMode from "./dark-mode.js";
import localConfig from "./local_config.js";

document.addEventListener("DOMContentLoaded", (e) => {
  // localStorage.clear();
  localConfig();
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
  scrollTop(".scroll");
});

isDarkMode("#btn-dark", "#btn-moon");
