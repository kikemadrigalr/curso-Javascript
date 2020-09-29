/*
console.log("***************Elementos del Documento**********************");
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(window.body);
console.log(document.documentElement); //devuelve la etiqueta html del documento
console.log(document.doctype);
// console.log(document, charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
// setTimeout(() => {
//   console.log(document.getSelection().toString());
// }, 3000);
*/
//metodo write sirve para escribir en el documento
//lo hace al final, antes del cierre del body
// document.write("<h2>Hola Mundo desde el DOM</h2>");

//algunos metodos de poco uso para capturar elementos del DOM
// console.log(document.getElementsByTagName("li"));
// console.log(document.getElementsByClassName("card"));
// console.log(document.getElementsByName("nombre"));

//
// console.log(document.getElementById("menu"));

//mas lento que el anterior pues debe analizar que tipo de elemento esta recibiendo
//solo retorna el primer elemento que concuerde con la busqueda
// console.log(document.querySelector("menu"));

//devuelve un nodelist con todos los elementos que concuerden con la busqueda
// console.log(document.querySelector("a"));
// console.log(document.querySelectorAll("a"));
// console.log(document.querySelectorAll("a").length);

//iterando sobre una nodelist de elementos del DOM
// document.querySelectorAll("a").forEach((el) => console.log(el));

//si se va a seleccionar por una clase, se debe pasar al parametro, el punto
// console.log(document.querySelector(".card"));
// console.log(document.querySelectorAll(".card"));

//comparte propiedades con los arreglos, por lo tano se puede recorrer por sus posiciones
//usando la notacion de los corchetes
// console.log(document.querySelectorAll(".card")[2]);

//puede seleccionar los elementos internos o hijos que se encuentren dentro de un identificador
// console.log(document.querySelectorAll("#menu li"));

//obtener propiedades de los elementos del dom

//obteniendo la propiedad lang de la etiqueta html
// console.log(document.documentElement.lang);
// console.log(document.documentElement.getAttribute("lang"));
// console.log(document.querySelector(".link-dom").href);

//obtiene solo el contenido de la propiedad href
// console.log(document.querySelector(".link-dom").getAttribute("href"));

// asignar atributos a las propiedades de los Elementos
// document.documentElement.lang = "en";
// console.log(document.documentElement.lang);

//utilizando el metodo setAttribute
//recibe como parametro el nombre del atributo y el nuevo valor
// document.documentElement.setAttribute("lang", "es-MX");
// console.log(document.documentElement.lang);

// const $linkDom = document.querySelector(".link-dom");
// $linkDom.setAttribute("target", "_blank");
// $linkDom.setAttribute("rel", "noopener"); //su uso se considera buena practica al abrir pestañas nuevas con programacion
// $linkDom.setAttribute("href", "https://youtube.com/jonmirha");

//validar si un atributo se encuentra en el elemento, con el uso del metodo has, devuelve true o false
// console.log($linkDom.hasAttribute("rel"));

// $linkDom.removeAttribute("rel");
// console.log($linkDom.hasAttribute("rel"));

//DATA ATTRIBUTES
//atributos personalizados por el programador
//todos deben cumplir con la regla (data-) usar la palabra data seguida de guion, seguida del atributo

// obtener data attributes
// console.log($linkDom.getAttribute("data-description"));

//usando data set, este devuelve un MAP con los diferentes data attributes que consiga en el elemento
//cada data attribute se guarda en una propiedad de ese MAP
// console.log($linkDom.dataset);

//acceder a un elemento en particular de el MAP, usando notacion del punto
// console.log($linkDom.dataset.description);

// asignar data attributes con setAttributes
// $linkDom.setAttribute("data-description", "Modelo de Objeto del Documento");
// console.log($linkDom.dataset.description);

//usando notacion del punto
// $linkDom.dataset.description = "Suscribete";
// console.log($linkDom.dataset.description);

// console.log($linkDom.hasAttribute("data-id"));

//****************************************************************************** */
/*

// Manejo de estilos css desde JS
const $linkDom = document.querySelector(".link-dom");

//usando la notacin del punto, devuelve de la propiedad style un mapa on todas las propiedas validas de css
//que se pueden utilizar en el elemento, en su mayoria vacia, salvo aquellas que fueron asignadaas al elemento
// e indicando las que se encuentran declaradas en las primeras posicion
console.log($linkDom.style);

//Usando el metodo getAttribute deuelve una cadena de texto con las propiedades que han sido declaradas para el elemento
console.log($linkDom.getAttribute("style"));

console.log($linkDom.style.backgroundColor);
console.log($linkDom.style.color);

//getComputedStyle
// Devuelve el estilo computado del elemento.
// Los estilos computados representan los valores finales computed (en)  de las propiedades CSS del elemento.

//devuelve un mapa con los estilos finales que se uestran para el elemento, cada uno con un indice
//es decir lo que interpreta el navegador
console.log(window.getComputedStyle($linkDom));

//devuelve una cadena de texto con el valor de la propiedad que se esta buscando
console.log(getComputedStyle($linkDom).getPropertyValue("color"));

//asignar propiedades y valores css a elementos
$linkDom.style.setProperty("text-decoration", "none");
$linkDom.style.setProperty("display", "block");
$linkDom.style.width = "50%";
$linkDom.style.textAline = "center";
$linkDom.style.marginLeft = "auto";
$linkDom.style.marginRight = "auto";
$linkDom.style.padding = "1rem";
$linkDom.style.borderRadius = ".5rem";

console.log($linkDom.style);
console.log($linkDom.getAttribute("style"));
console.log(window.getComputedStyle($linkDom));

//Variables CSS - Custom Properties CSS

//acceder a la etiqueta html, body
const $html = document.documentElement,
  $body = document.body;

//acceder a variables css
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
  varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

//asigno el nuevo valor de --dark-color en el root
$html.style.setProperty("--dark-color", "#000");

//obtengo el valor que contiene el root
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

// varDarkColor = "pink";

//asigno el nuevo valor a la etiqueta body
$body.style.setProperty("background-color", varDarkColor);

*/

//**************************************************************************************** */
//acceder al atributo class
/*
const $card = document.querySelector(".card");

console.log($card);

//className, devuelve la cadena de texto con el nombre de la clase

console.log($card.className);

//classList devuelve un token list con los valores del atributo class
console.log($card.classList);

//contains sirve para evaluar si un elemento contiene una clase en particular
//devuelve true o false
console.log($card.classList.contains("rotate-45"));

//añadir una clase a un elemento con el metodo add de classist
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));

console.log($card.className);
console.log($card.classList);

//elimminar una clase de un elemento
$card.classList.remove("rotate-45");

//metodo toogle evalua si el elemento tiee la clase se la quita
//si no la tiene, la coloca

//como se elimino con el remove, el toogle coloca nuevaente la clase
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));

//como el toogle anterior la coloca este la quita
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));

$card.classList.toggle("rotate-45");

//metodo replace, reemplaza una clase por otra, recibe dos parametros,
// el primer parametro la clase se va a reemplazar y el segundo la clase que la reemplaza
$card.classList.replace("rotate-45", "rotate-135");
console.log($card.classList.contains("rotate-45"));

//agregar, quitar o intercarmbiar variaas clases al mismo tiempo
//usando el metodo add, separando cada clase con comas
$card.classList.add("opcity-80", "sepia");

//remove funciona tambien con mas de una clase a la vez
$card.classList.remove("opcity-80", "sepia");

//toogle tambien puede recibir mas de una clase a la vez
$card.classList.toggle("opcity-80", "sepia");

const $cards = document.querySelectorAll(".card");
$cards.forEach((card) => card.classList.add("opcity-80", "sepia"));
// console.log($cards);

*/

//****************************************************************************** */
//interactual con tetxo en el DOM

const $whatIsDom = document.getElementById("que-es");

let text = `
    <p>
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
API para documentos HTML y XML.
    </p>
    <p>
    Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
`;

//agregar contenido de texto a un elemmento

//inner text sirve para agregar contenido textual a un elemento del dom
//se creo para internet explorer, funciona en cualquier navegador pero no es parte del standar
//las etiquetas html las mostraria como cadenas de texto
// $whatIsDom.innerText = text;

//textContent sirve para agregar contenid textual a un elemento html
//esta si forma parte del standar
//las etiquetas html que contiene el texto seran mostradas como texto
//esta es util solo para mostrar texto
$whatIsDom.textContent = text;

//se debe usar InnerHTML que, es para agregar contenido html dentro de un elemento del dom
//esta es util para mostrar contenido html
$whatIsDom.innerHTML = text;

//mientras que los metodos anteriores agregan contenido dentro del elemento del dom
//que se enuentra en la variable, el metodo outerHTML reemplaza por completo ese elemento
//por el contenido html que le estemos pasando
$whatIsDom.outerHTML = text;

//********************************************************** */
//Curso JavaScript: 67. DOM Traversing: Recorriendo el DOM
//*********************************************************** */

/*
//utilizo este elemento para apartir de el ir recorriendo
const $cards = document.querySelector(".cards");
console.log($cards);

//si quiero llegar a los hijos del elemento cards se utiliza la propiedad children
//esta devuelve una coleccion html con todos los elementos hijos del elemento,
// en este caso, los hijos de $cards
console.log($cards.children);

//con la notaion de los corchetes puedo acceder a un hijo en especifico
console.log($cards.children[2]);

//acceder al padre del elemento
//ambas proiedades retornan el elemento padre
console.log($cards.parentElement);
console.log($cards.parentNode);

//obtener el primer y el ultimo elemento hijo

//firstChild devuelve el primer NODO hijo, sin importar el tipo
console.log($cards.firstChild);

// firstElementChild devuelve el primer ELEMENTO hijo
console.log($cards.firstElementChild);

//devuelve el ultimo NODO hijo del elemento sin importar el tipo de nodo
console.log($cards.lastChild);

//devuelve el ultim elemento hijo
console.log($cards.lastElementChild);

//acceder a elemento en el mismo nivel, es decir elementos hermanos

//acceder al NODO hermano anterior, sin importar el tpo de nodo
console.log($cards.previousSibling);

//acceder al ELEMENTO hermano Anterior
console.log($cards.previousElementSibling);

//acceder al NODO hermano anterior, sin importar el tipo de nodo
console.log($cards.nextSibling);

//acceder al ELEMENTO hermano Siguiente
console.log($cards.nextElementSibling);

//closest obtiene el padre mas cercano del selector que se le pase como parametro
console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section"));

*/

/************************************************************* */
// Curso JavaScript: 68. DOM: Creando Elementos y Fragmentos
/************************************************************* */

/*
//crear una nueva tarjeta

//el metodo createElement permite crear un nuevo elemento html
const $figure = document.createElement("figure"),
  $image = document.createElement("img"),
  $figCaption = document.createElement("figcaption"),
  $figCaptiontext = document.createTextNode("Animals"),
  //capturar el elemento padre del nuevo elemento targeta
  $cards = document.querySelector(".cards");

//agregar atributo src para la imagen
$image.setAttribute("src", "https://placeimg.com/200/200/animals");
$image.setAttribute("alt", "Animals");

//agregar clases css
$figure.classList.add("card");

//agrear al padre un nuevo elemento hijo con el metodo appendChild
$figCaption.appendChild($figCaptiontext);
$figure.appendChild($image);
$figure.appendChild($figCaption);
$cards.appendChild($figure);

//otra forma no tan correcta usando innerHTML, ya que esto no genera un nodo o elemento html
const $figure2 = document.createElement("figure");

$figure2.innerHTML = `
  <img src="https://placeimg.com/200/200/people" alt="people" />
  <figcaption>People</figcaption>`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

//crear varios elementos
const estaciones = ["Primavera", "verano", "Otoño", "Invierno"];
$ul = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);

estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});

const continentes = ["África", "America", "Asia", "Europa", "Oeania"];
$ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

//fragmentos, es un tipo de Nodo del DOM
//son utiles para hacer incersiones de mucha informacion al Dom,
// ya que permite hacer inserciones al fragmento y luego este renderiza toda la informacion en el DOM

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  $ul3 = document.createElement("ul");
$fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);

*/

/************************************************************* */
// Curso JavaScript: 69. DOM: Templates
//las etiquetas template no se renderizan en el DOM
//su objetivo es estructurar un modelo generar elementos o estructuras del dom de manera dinamica
/************************************************************* */

/*
const $cards = document.querySelector(".cards"),
  //crear una variable que apunte al template
  //se captura por el id que se le definio
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  cardContent = [
    {
      title: "Tecnología",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
  ];

cardContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;

  //como existe un solo template definido en el html
  //para poder renderizar mas de una tarjeta se debe clonar el nodo desde JS
  //para renderizar el total de la informacion
  //se utiliza el metodo importNode, recibiendo dos parametros
  //el primero el template o nodo que va a clonar, un true que signiica que
  //copiara toda la estructura interna de dicho nodo o template

  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});

$cards.appendChild($fragment);

*/

/************************************************************ */
// Curso JavaScript: 70. DOM: Modificando Elementos (Old Style)
/************************************************************ */

/*
//reemplazar un elemento con el metodo replaceChild

const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $cloneCards = $cards.cloneNode(true);

$newCard.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt="Any"/>
    <figcaption>Any</figcaption>
    `;

$newCard.classList.add("card");

//el metodo replaceCild recibe dos parametros,
//el elemento que se va a agregar
//el segundo, el elemento que se va a reemplazar
// $cards.replaceChild($newCard, $cards.children[2]);

//insertar antes del primer elemento con el metodo insertBefore, este recibe dos parametros
//el nodo que se va a insertar y el nodo que usa como referencia
// $cards.insertBefore($newCard, $cards.firstElementChild);

//eliminar un nodo con el metodo removeChild,
//recibe como parametro el elemento que se va a eliminar
// $cards.removeChild($cards.lastElementChild);

//clonar un nodo dinamicamente, Desde un nodo html, (sin template html)
//cloneNide,  recibe un parametro
//true para que clone todo el contenido
//false solo clona las etiqueta contenedora del contenido

document.body.appendChild($cloneCards);

*/
/******************************************************** */
// Curso JavaScript: 71. DOM: Modificando Elementos (Cool Style)
/******************************************************** */

/* 
.insertAdjacent...
    .insertAdjacentElement(position,el) (nodo de tipo elemento)
    .insertAdjacentHTML(position,html) (texto que sea en formato html)
    .insertAdjacentText(position,text) (texto)

posiciones:
    beforebegin (hermano anterior)
    afterbegin (primer hijo)
    beforeend (ultimo hijo)
    afterend  (hermano siguiente)
*/

/*
const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

$contentCard = `
    <img src="https://placeimg.com/200/200/any" alt="Any"/>
    <figcaption></figcaption>
    `;

$newCard.classList.add("card");

//insertar el contenido html a la nueva tarjeta con insertAdjacentHTML
$newCard.insertAdjacentHTML("beforeend", $contentCard);

//insertar el text en el figcaption con insertAdjacentText
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");

//antes del elemento cards
// $cards.insertAdjacentElement("beforebegin", $newCard);

//como primer hijo del elemento cards
// $cards.insertAdjacentElement("afterbegin", $newCard);

//como ultimo hijo dek ekemento cards
$cards.insertAdjacentElement("beforeend", $newCard);

// como hermano siguiente del elemento cards
// $cards.insertAdjacentElement("afterend", $newCard);

// metodos de jquery para agregar elementos ahora soportado por JS
//  prepend lo agrega como primer hijo
$cards.prepend($newCard);

//before lo agrega como hermano anterior
$cards.before($newCard);

//append lo agrega como ultimo hijo del nodo referencia
$cards.append($newCard);

//after como hermano posterior
$cards.after($newCard);

*/

/******************************************************************* */
// Curso JavaScript: 72. DOM: Manejadores de Eventos
/******************************************************************* */

//cuando una funcion es usada como manejador de eventos,
// esta nos permite acceder a la palabra reservada event
// la cual contiene toda la informacion al evento que se esta ejecutando
// siendo elementos importantes el type (tipo de evento)
// y el target (elemento que disparo el evento)

function holaMundo() {
  alert("Hola Mundo");
  console.log(event);
}

// Evento Semantico
const $eventoSemantico = document.getElementById("evento-semantico"),
  $eventoMultiple = document.getElementById("evento-multiple");
//cuando se va a manejar un evento semantico,
// se iguala la funcion que maneja el evento al elemento que lo va a disparar,
//el nombre de la funcion va sin los parentesis para que no se ejecute al cargar el navegador

$eventoSemantico.onclick = holaMundo;

//esta tecnica de eventos semanticos, solo permite ejecutar una sola funcion por cada evento
//en este caso ya no se ejecutaria la funcion holaMundo definida anteriormente
//sino que se ejecutaria la nueva funcion anonima a la cual se le asigna el evento
$eventoSemantico.onclick = function (e) {
  alert("Manejador de Evento Semantico");
  console.log(e);
  console.log(event);
};

//Manejadores de eventos multiples para definir diferentes funciones a un mismo elemento
//utilizando addEventListener
//recibe el tiplo de evento como primer parametro
//el listener, que es la funcion que se va a ejeutar, solo el nombre de la funcion sin parentesis
$eventoMultiple.addEventListener("click", holaMundo);

//en este caso se esta asignado una segunda funcion al mismo elemento del dom
// y esta ves se pueden ejecutar ambas funciones ya que permite la ejecucion multiple
//para el evento asignado a este elemento
$eventoMultiple.addEventListener("click", (e) => {
  alert("Manejador de Eventos Multiples");
  console.log(e.type);
  console.log(e.target);
  console.log(e);
});
/*




*/
/*********************************************************************/
// Curso JavaScript: 73. DOM: Eventos con Parámetros y Remover Eventos
/*********************************************************************/
function saludar(nombre = "Desconocid@") {
  alert(`Hola ${nombre}`);
  console.log(event);
}

//si se hace de esta manera la funcion maneajdora del evento que es saludar,
//tomara el evento (event) como su parametro
// $eventoMultiple.addEventListener("click", saludar);

//para poder pasar parametros en los eventos a las funciones manejadora
//se debe hacer uso de las arrow functions, ya que en ese caso
//la funcion que maneja el evento sera la arrow function anonima
//y esta ejecutará dentro de si a la funcion que invoquemos con los parametros respectivos
$eventoMultiple.addEventListener("click", () => {
  saludar();
  saludar("Carlos");
});

//remover eventos solo funciona con manejadores multiples
//Remover Eventos con removeEventListener

const $eventoRemover = document.getElementById("evento-remover");

/*
$eventoRemover.addEventListener("dblclick", (e) => {
  alert(`Removiendo Evento ${e.type}`);
  console.log(e);
});
*/

//removeEventListener recibe obligatoriamente dos parametros
//el evento
//la funcion a remover

const removerDobleClick = (e) => {
  alert(`Removiendo Evento ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick);
  $eventoRemover.disabled = true;
};

//para remover un manejador de evento, esta funcion debe estar previamente declarada
//bien sea como funcion declarada o expresada
//no funciona con las arrows function

$eventoRemover.addEventListener("dblclick", removerDobleClick);
/*




*/
/****************************************************************/
// Curso JavaScript: 74. DOM: Flujo de Eventos (Burbuja y Captura)
/****************************************************************/
//El flujo de los eventos va desde el elemento mas interno
//al elemento mas externo, el cual se conoce como fase de burbuja
//El flujo contrario puede ser accedido con un tercer parametro al metodo listener
//colocando el tercer parametro en true se aplica el flujo desde
//el elemento mas externo al elemento mas interno, conociendo este flujo
//como flujo de captura

const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
  $linkEventos = document.querySelector(".eventos-flujo a");
/*
  function flujoEventos(e) {
  console.log(
    `Hola te saludo ${this.className}, el click lo originó ${e.target.className}`
  );

  //stopPropagation permite detener la propagacion del evento en los
  //elementos hijos o padres
  e.stopPropagation();
}

console.log($divsEventos);

$divsEventos.forEach((div) => {
  //fase de burbuja
  div.addEventListener("click", flujoEventos);
  // div.addEventListener("click", flujoEventos, fasle);

  //fase captura
  //div.addEventListener("click", flujoEventos, true);

  //el metodo addEventListener puede recibir como tercer parametro un
  //capture hace referencia a la fase de los eventos
  //once hace referencia a las veces que se ejecutara el evento
  // div.addEventListener("click", flujoEventos, {
  //   capture: false,
  //   once: true,
  // });
});



*/
/************************************************************************************/
// Curso JavaScript: 75. DOM: stopPropagation & preventDefault
/************************************************************************************/
// $linkEventos.addEventListener("click", (e) => {
//   alert("Hola soy tu amigo y docente digital");

//   //preventdefaul cancelaa la accion que tenga por defecto el elemento
//   e.preventDefault();
// });
/*



*/
/*************************************************************/
// Curso JavaScript: 76. DOM: Delegación de Eventos
/*************************************************************/
function flujoEventos(e) {
  console.log(
    `Hola te saludo ${this.className}, el click lo originó ${e.target.className}`
  );
}

//se asigna el evento al elemento superior
//en este caso body
document.addEventListener("click", (e) => {
  console.log("Click en", e.target);

  if (e.target.matches(".eventos-flujo div")) {
    flujoEventos(e);
  }

  //se busca el elemento donde sucedio el click con el metodo matches
  if (e.target.matches(".eventos-flujo a")) {
    alert("Hola soy tu amigo y docente digital");
    e.preventDefault();
  }
});
/*



*/
/******************************************************************************************/
// Curso JavaScript: 77. BOM: Propiedades y Eventos
/******************************************************************************************/
//Propiedades y metodos propias del navegador y que cuelgan del objeto windows
/*
//eventos del navegador
window.addEventListener("resize", (e) => {
  console.clear();
  console.log("*******Evento Resize*******");
  console.log(window.innerWidth); //ancho del viewport
  console.log(window.innerHeight); //alto del viewport
  console.log(window.outerWidth); //ancho de la pantalla
  console.log(window.outerHeight); //alto de la pantalla
  console.log(e);
});

window.addEventListener("scroll", () => {
  console.clear();
  console.log("*******Evento Scroll*******");
  console.log(window.scrollX);
  console.log(window.scrollY);
});

//identificar en que coordenadas de la pantalla se dibuja la ventana del navegador
//load evento de carga de la ventana del navegador
window.addEventListener("load", (e) => {
  // console.clear();
  console.log("*******Evento Load*******");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});

//evento similiar a load, pero con mejoras de rendimiento.
//es mas rapido para mostrar cosas apenas carga el navegador
//al contrario de load, DOMContentLoaded no espera
//a cargar hojas de estilos imagenes, scripts etc
document.addEventListener("DOMContentLoaded", (e) => {
  console.log("*******DOMContentLoaded*******");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
}); 
*/
/**




*/
/*******************************************************************/
// Curso JavaScript: 78. BOM: Métodos
/*******************************************************************/
// window.alert("Alerta");
// window.confirm("Confirmacion");
// window.prompt("Aviso");

const $btnAbrir = document.getElementById("abrir-ventana"),
  $btnCerrar = document.getElementById("cerrar-ventana"),
  $btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener("click", () => {
  ventana = window.open("https://aprendejavascript.org");
});

$btnCerrar.addEventListener("click", () => {
  //si se ejecuta el metodo window.close o close,
  // se cierra la ventana en la que estamos trabajando
  // window.close()

  // se debe utilizar la referencia que se guardó
  // en la variable ventana al momento de ejecutar el metodo open
  ventana.close();
});

$btnImprimir.addEventListener("click", () => {
  window.print();
}); /*




*/
/*********************************************************************/
// Curso JavaScript: 79. BOM: Objetos: URL, Historial y Navegador
/*********************************************************************/

//objeto Location (URL)
console.log("*********Objeto URL (Location)************");
console.log(location);
console.log(location.origin); //devuelve el nombre del origen de la pagina
console.log(location.protocol); //devuelve el protocolo utilizado
console.log(location.host); //devuelve el nombre del host o el dominio de la pagina incluido el puerto
console.log(location.hostname); //devuelve solo el nombre del host
console.log(location.port); //devuelve el puerto que utiliza, si es el puerto por defecto devuelve una cadena vacia
console.log(location.href); //devueve toda la url
console.log(location.hash); //devuelve solo la parte de la url que este despues dek un #
console.log(location.pathname); //devuelve el archivo que se esta cargando
console.log(location.search); //devuelve valores que se esten enviando por la url
// location.reload() //recarga la pagina
// location.assign //asignar una nueva url

//Objeto History
console.log("*********Objeto Historial (History)************");
console.log(history); //guada el historial y el atributo
console.log(history.length); //lengnt  guando uantas paginas hemos visitado
history.back; // sirev para regresar en el historial, se le pasa un parametro numerico, que indica el numero de paginas
history.forward; //sirve para avanzar en las paginas que se encuentras registradas en e historial, recbe como parametro el numero de las paginas a avanzar
history.go; //permite ir directamente a una pagina del historial, recbe un numero negativo para ir hacia atras y uno positivo para ir adelante

//obejto navigator
console.log("*********Objeto Navegador (Navigator)************");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation); //geolocalizacion
console.log(navigator, MediaDevices); //dispositivos media, microfono, camara
console.log(navigator.mimeTypes); //tipos de formato que acepta el navegador
console.log(navigator.onLine); //verificar la conexion, si la pierde o la recupera
console.log(navigator.serviceWorker); //API para hacer progresive webApp
console.log(navigator.storage); //Api de almacenamiento webStorage, localStorage
console.log(navigator.usb); //manipular dispositivos usb
console.log(navigator.userAgent); //informacion del navegador que se esta conectando a la aplicacion
