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
