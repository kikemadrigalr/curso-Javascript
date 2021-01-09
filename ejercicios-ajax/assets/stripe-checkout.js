import STRIPE_KEYS from "./stripe-keys.js";

const d = document,
  $comics = d.getElementById("comics"),
  $template = d.getElementById("comic-template"),
  // $comic = d.getElementById("comic"),
  $fragment = d.createDocumentFragment(),
  fetchOptions = {
    headers: {
      Authorization: `Bearer ${STRIPE_KEYS.secret}`,
    },
  };
let products, prices;

//funcion para formatear el precio
//colocar los decimales, mas el simbolo de la moneda
const moneyformat = (num) => `$${num.slice(0, -2)},${num.slice(-2)}`;

//para evitar hacer ambas peticiones por separado, se utiiza el metodo all
//del objeto promise, el cual recibe un arreglo con todas las promesas
//que se necesitan ejecutar y esperara hasta su respuesta
Promise.all([
  fetch("https://api.stripe.com/v1/products", fetchOptions),
  fetch("https://api.stripe.com/v1/prices", fetchOptions),
])
  .then((responses) => Promise.all(responses.map((resp) => resp.json())))
  .then((json) => {
    // console.log(json);
    products = json[0].data;
    prices = json[1].data;
    console.log(products, prices);

    //con el array precio se utilizara el id del producto al que apunta dicho precio
    //para filtrar y buscar el producto especifico de ese id

    prices.forEach((el) => {
      let productData = products.filter((product) => product.id === el.product);
      // console.info(productData);
      // console.log($template, comic);

      // console.log($template.children);
      let $figure = d.createElement("figure");
      $figure.classList.add("comic");
      $figure.setAttribute("data-price", el.id);

      let $image = d.createElement("img");
      $image.setAttribute("src", productData[0].images[0]);
      $image.setAttribute("alt", productData[0].name);

      let $figCaption = d.createElement("figcaption");
      $figCaption.innerHTML = `
      ${productData[0].name}
      <br/>
      ${moneyformat(el.unit_amount_decimal)} ${el.currency}
      `;

      $figure.appendChild($image);
      $figure.appendChild($figCaption);
      $fragment.appendChild($figure);

      // console.log(typeMode);
    });

    $comics.appendChild($fragment);
  })
  .catch((error) => {
    console.error(error);
    let message =
      error.statusText || "Ocurrio un error al conectarse al API Strip";
    $comics.innerHTML = `<p>Error ${error.staatus}: ${message}</p>`;
  });

d.addEventListener("click", (e) => {
  // console.log(e.target);
  if (e.target.matches(".comic *")) {
    // alert("A comprar");
    let priceId = e.target.parentElement.getAttribute("data-price");
    let typeMode;

    fetch(`https://api.stripe.com/v1/prices/${priceId}`, fetchOptions)
      .then((resp) => resp.json())
      .then((json) => {
        // console.log(json);

        if (json.type === "one_time") {
          typeMode = "payment";
        } else if (json.type === "recurring") {
          typeMode = "subscription";
        }

        // return typeMode;
        // console.log(typeMode);
      })
      .catch((error) => {
        console.error(error);
        let message =
          error.statusText || "Ocurrio un error al conectarse al API Strip";
        $comics.innerHTML = `<p>Error ${error.staatus}: ${message}</p>`;
      });

    Stripe(STRIPE_KEYS.public)
      .redirectToCheckout({
        lineItems: [{ price: priceId, quantity: 1 }],
        // mode: typeMode,
        mode: "payment",
        successUrl:
          "http://127.0.0.1:5501/ejercicios-ajax/assets/stripe-succes.html",
        cancelUrl:
          "http://127.0.0.1:5501/ejercicios-ajax/assets/stripe-cancel.html",
      })
      .then((resp) => {
        console.log(resp);
        if (resp.error) {
          $comics.insertAdjacentElement("afterend", resp.error.message);
        }
      });
  }
});

// fetch("https://api.stripe.com/v1/products", {
//   headers: {
//     Authorization: `Bearer ${STRIPE_KEYS.secret}`,
//   },
// })
//   .then((res) => {
//     console.log(res);
//     return res.json(res);
//   })
//   .then((json) => console.log(json));

// fetch("https://api.stripe.com/v1/prices", {
//   headers: {
//     Authorization: `Bearer ${STRIPE_KEYS.secret}`,
//   },
// })
//   .then((res) => {
//     console.log(res);
//     return res.json(res);
//   })
//   .then((json) => console.log(json));
