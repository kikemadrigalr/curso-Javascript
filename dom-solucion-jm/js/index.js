import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { moveBall, shortcuts } from "./dom/teclado.js";
import countDown from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/button_scroll.js";
import darktheme from "./dom/tema_oscuro.js";
import responsiveMedia from "./dom/objeto_resposive.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("/assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countDown("countdown", "Sep 7, 2021", "Feliz Cumpleaños Kike");
  scrollTopButton(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href="https://www.youtube.com/embed/BS5RX27VaAQ" target="_blank" rel="noopener">Ver Video</a>`,
    `<iframe width="600" height="315" src="https://www.youtube.com/embed/BS5RX27VaAQ" 
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/athmYShUzEnkpN4L6" target="_blank" rel="noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.277792999292!2d115.44872021433297!3d-8.374312086747901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd21cbe3748b2b7%3A0xbfc39798cd1bb4a!2sTemplo%20madre%20de%20Besakih!5e0!3m2!1ses!2sco!4v1602130555559!5m2!1ses!2sco" 
          width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" ></iframe>`
  );
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

darktheme(".dark-theme-btn", "dark-mode");
