document.addEventListener("DOMContentLoaded", (e) => {
  //funcion include
  //recibe elemento a cargar, y la url del mismo
  const includeHTML = (el, url) => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", (e) => {
      if (xhr.readyState !== 4) return;

      if (xhr.status >= 200 && xhr.status < 300) {
        el.outerHTML = xhr.responseText;
      } else {
        let message =
          xhr.statusText ||
          "Error al cargar el archivo, verifica que estes haciendo la petición por el protocolo http o https";
        el.outerHTML = `<div><p>Error ${xhr.status} ${message}</p></div>`;
      }
    });

    xhr.open("GET", url);
    xhr.setRequestHeader("Content-type", "text/html; cherset=utf-8");
    xhr.send();
  };

  //seleccionar todos los elementos con data-atribute
  document.querySelectorAll("[data-include]").forEach((el) => {
    includeHTML(el, el.getAttribute("data-include"));
  });
});
