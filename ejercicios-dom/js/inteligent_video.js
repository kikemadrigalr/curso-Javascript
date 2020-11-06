const d = document;

export default function videoInteligent(video) {
  const $video = d.querySelector(video);

  const handleVisibilityChange = (e) => {
    if (d.hidden) {
      // $video.muted = true;
      $video.pause();
    } else {
      // $video.muted = false;
      $video.play();
    }
  };

  d.addEventListener("visibilitychange", handleVisibilityChange);

  const cb = (entries) => {
    if (entries[0].isIntersecting) {
      $video.play();
    } else {
      $video.pause();
    }
  };

  const observer = new IntersectionObserver(cb, {
    threshold: 0.75,
  });

  observer.observe($video);
}
