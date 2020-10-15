const d = document,
  n = navigator;
export default function webCam(id) {
  const $video = d.getElementById(id);

  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        $video.srcObject = stream;
        $video.play();
      })
      .catch((err) => {
        const $msg = d.createElement("p");
        $msg.innerHTML = `<p>Ocurrio el siguiente error<mark> ${err} </mark></p>`;
        $video.insertAdjacentElement("beforebegin", $msg);
        console.error(`Ocurrio el siguiente error ${err}`);
      });
  }
}
