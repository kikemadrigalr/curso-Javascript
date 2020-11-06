const d = document;

export default function scrollSpy() {
  const $sections = d.querySelectorAll(".section[data-scroll-spy]");
  // console.log($sections);

  const cb = (entries) => {
    // console.log("entries", entries);
    entries.forEach((entry) => {
      // console.log(entry);
      const id = entry.target.getAttribute("id");
      // console.log(id);
      if (entry.isIntersecting) {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add(
          "active"
        );
      } else {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove(
          "active"
        );
      }
    });
  };

  const observer = new IntersectionObserver(cb, {
    //root elemento que se toma como reerecnia por defecto es el elemento Body
    //rootMargin: "-250px" recibe valores expresados en px hacia todos los lados representan los margenes limites que tiene para observar el elemento
    threshold: 0.75, //porcentage que sebe estar visible del elemento para desencadenar la programacion
  });

  $sections.forEach((el) => {
    observer.observe(el);
  });
}
