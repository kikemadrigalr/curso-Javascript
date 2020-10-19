const d = document;

export default function draw(btn, selector) {
  const getWinner = (selector) => {
    const $players = d.querySelectorAll(selector),
      random = Math.floor(Math.random() * $players.length),
      winner = $players[random];

    // console.log($players, random, winner);

    return `El ganador es ${winner.textContent}`;
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let result = getWinner(selector);
      alert(result);
      console.log(result);
    }
  });
}

//para usar en consola, utilizando los comentarios de un post,
// inspeccionando la caja de comentarios y ubcando el selector
// con el nombre del autor de comentarios
const getWinnerComment = (selector) => {
  const $players = document.querySelectorAll(selector),
    random = Math.floor(Math.random() * $players.length),
    winner = $players[random];

  // console.log($players, random, winner);

  return `El ganador es ${winner.textContent}`;
};

// getWinnerComment("ytd-comment-thread-renderer #autor-text span");
