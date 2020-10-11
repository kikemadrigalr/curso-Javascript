export default function responsiveTester(form, btnSubmit, btnClose) {
  const $form = document.querySelector(form),
    $btnSubmit = document.getElementById(btnSubmit),
    $btnClose = document.getElementById(btnClose);

  let openedWindow;
  const patronUrl = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

  document.addEventListener("submit", (e) => {
    let url = `${$form.url.value}`,
      winWidth = $form.ancho.value,
      winHeight = $form.alto.value;

    if (e.target === $form) {
      e.preventDefault();

      if (url === "") return swal("Ups!", "Debes Ingresar un Url", "warning");

      if (typeof url !== "string")
        return swal("Ups!", "El url debe ser una cadena de texto", "warning");

      if (winWidth === "" || winHeight === "")
        return swal(
          "Ups!",
          "Debes Ingresar valores para Alto y Ancho de la ventana",
          "warning"
        );

      if (patronUrl.test(url)) {
        openedWindow = window.open(
          `${url}`,
          "_blank",
          `",width=${winWidth} height=${winHeight} toolbar=no scrollbars=no"`
        );
      } else {
        swal("Ups!", "El url ingresado no es Valido", "error");
      }
    }
  });

  $btnClose.addEventListener("click", (e) => {
    if (e.target.matches($btnClose)) openedWindow.close();
  });
}
