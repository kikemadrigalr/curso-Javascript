export default function searchFilter(input, btn, cards) {
  const $input = document.getElementById(input),
    $btnReset = document.getElementById(btn);
  const $cards = document.querySelectorAll(cards);

  document.addEventListener("keyup", (e) => {
    if (e.target === $input) {
      $cards.forEach((el) => {
        el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
          ? el.classList.remove("filter")
          : el.classList.add("filter");
      });
    }

    // if (e.keyCode === 8) {
    //   if ($input.value === "") {
    //     for (const el of $cards) {
    //       // el.parentElement.style.display = "inline-block";
    //       el.classList.remove("filter");
    //     }
    //   }
    // }
  });

  // $inputSearch.addEventListener("keyup", (e) => {
  //   let ExpReg = new RegExp(`${$inputSearch.value}`, "i");
  //   // console.log(e);
  //   // console.log(ExpReg);

  //   if ((e.keyCode >= 65 && e.keyCode <= 90) || e.keyCode === 192) {
  //     for (const el of $cardsChildren) {
  //       if (!ExpReg.test(el.lastElementChild.innerHTML)) {
  //         console.log("conincide");
  //         el.lastElementChild.parentElement.style.display = "none";
  //       }
  //     }
  //   }

  //   if (e.keyCode === 8) {
  //     if ($inputSearch.value === "") {
  //       for (const el of $cardsChildren) {
  //         el.parentElement.style.display = "inline-block";
  //       }
  //     } else {
  //       for (const el of $cardsChildren) {
  //         if (!ExpReg.test(el.lastElementChild.innerHTML)) {
  //           // console.log("conincide");
  //           el.lastElementChild.parentElement.style.display = "none";
  //         }
  //       }
  //     }
  //   }
  // });

  document.addEventListener("click", (e) => {
    if (e.target == $btnReset || e.target == $btnReset.firstElementChild) {
      $input.value = "";

      for (const el of $cards) {
        // el.style.display = "inline-block";
        el.classList.remove("filter");
      }
      // window.scroll({
      //   bottom: 0,
      //   behavior: "smooth",
      // });
      window.scrollTo(0, 100000);
    }
  });
}
