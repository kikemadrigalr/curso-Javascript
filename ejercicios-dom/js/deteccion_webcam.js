export default function mediaDevices(btn, video) {
  const $btnSnap = document.getElementById(btn),
    $video = document.getElementById(video);

  const constraints = {
    video: {
      width: 1280,
      height: 720,
    },
  };

  document.addEventListener("click", (e) => {
    if (e.target === $btnSnap) {
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          $video.srcObject = stream;
          $video.style.display = "block";
          $video.style.margin = "auto";
        })
        .catch((err) => {
          swal("Ups!", `No se ha Podido iniciar el video! ${err}`, "error");
        });
    }
  });
}
