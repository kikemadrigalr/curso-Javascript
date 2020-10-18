import hamburger from "./menu.js";
import relojAlarma from "./reloj.js";
import { mover, alertas } from "./teclado.js";
import contador from "./contador.js";
import scrollTop from "./scroll.js";
import isDarkMode from "./dark-mode.js";
import renderVideoMap from "./video_map.js";
import responsiveTester from "./responsive_tester.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_conexion.js";
import mediaDevices from "./deteccion_webcam.js";
import myGeolocation from "./geolocalización.js";
import searchFilter from "./filtro_busqueda.js";

document.addEventListener("DOMContentLoaded", (e) => {
  // localStorage.clear();
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
  renderVideoMap(
    "video",
    `<a href="https://www.youtube.com/embed/BS5RX27VaAQ" target="_blank" rel="noopener">Ver Video</a>`,
    `<iframe width="600" height="315" src="https://www.youtube.com/embed/BS5RX27VaAQ" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  renderVideoMap(
    "mapa",
    `<a href="https://goo.gl/maps/athmYShUzEnkpN4L6" target="_blank" rel="noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.277792999292!2d115.44872021433297!3d-8.374312086747901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd21cbe3748b2b7%3A0xbfc39798cd1bb4a!2sTemplo%20madre%20de%20Besakih!5e0!3m2!1ses!2sco!4v1602130555559!5m2!1ses!2sco" 
    width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" ></iframe>`
  );
  responsiveTester("#form-tester", "btn-submit", "btn-close");
  userDeviceInfo("user-device");
  mediaDevices("snap", "cam-video");
  myGeolocation();
  searchFilter("input-busqueda", "reset", ".card");
});

isDarkMode("#btn-dark", "#btn-moon");
networkStatus("on-line", "off-line");
