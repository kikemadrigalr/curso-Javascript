export default function renderVideoMap(el, mobile, desktop) {
  let breakpoint = window.matchMedia("(min-width: 600px)");

  const resize = (e) => {
    if (e.matches) {
      document.getElementById(el).innerHTML = desktop;
    } else {
      document.getElementById(el).innerHTML = mobile;
    }
  };

  breakpoint.addListener(resize);
  resize(breakpoint);
}
// export default function renderVideoMap(video, mapa) {
//   const $divVideo = document.querySelector(video),
//     $divMapa = document.querySelector(mapa);

//   const videoLink = document.createElement("a"),
//     mapLink = document.createElement("a");

//   videoLink.href = "https://www.youtube.com/embed/BS5RX27VaAQ";
//   videoLink.target = "_blank";
//   videoLink.rel = "noopener";
//   videoLink.innerHTML = "Ver Video";

//   mapLink.href = "https://goo.gl/maps/athmYShUzEnkpN4L6";

//   mapLink.target = "_blank";
//   mapLink.innerHTML = "Ver Mapa";
//   videoLink.rel = "noopener";

//   const videoFrame = document.createElement("iframe"),
//     mapFrame = document.createElement("iframe");

//   videoFrame.src = "https://www.youtube.com/embed/BS5RX27VaAQ";
//   videoFrame.width = "600";
//   videoFrame.height = "315";
//   videoFrame.frameborder = "0";
//   videoFrame.allow =
//     "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
//   videoFrame.allowFullscreen = "allowFullscreen";

//   mapFrame.src =
//     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.277792999292!2d115.44872021433297!3d-8.374312086747901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd21cbe3748b2b7%3A0xbfc39798cd1bb4a!2sTemplo%20madre%20de%20Besakih!5e0!3m2!1ses!2sco!4v1602130555559!5m2!1ses!2sco";
//   mapFrame.width = "600";
//   mapFrame.height = "450";

//   const showLinks = () => {
//     $divVideo.appendChild(videoLink);
//     $divMapa.appendChild(mapLink);
//   };

//   const showVideoMap = () => {
//     $divVideo.appendChild(videoFrame);
//     $divMapa.appendChild(mapFrame);
//   };

//   const removeLinks = () => {
//     $divVideo.removeChild(videoLink);
//     $divMapa.removeChild(mapLink);
//   };
//   const removeVideoMap = () => {
//     $divVideo.removeChild(videoFrame);
//     $divMapa.removeChild(mapFrame);
//   };

//   window.addEventListener("load", () => {
//     if (window.matchMedia("(max-width: 600px)").matches) {
//       showLinks();
//     } else {
//       showVideoMap();
//     }
//   });

//   window.addEventListener("resize", (e) => {
//     console.log(e);
//     // e.preventDefault();
//     if (window.matchMedia("(min-width: 600px)").matches) {
//       // if (e.srcElement.innerWidth === 400) {
//       removeLinks();
//       showVideoMap();
//     } else {
//       removeVideoMap();
//       showLinks();
//     }
//   });
// }
