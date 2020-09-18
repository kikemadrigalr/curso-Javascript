// Symbol es un tipo de datos cuyos valores son únicos e immutables.
// Dichos valores pueden ser utilizados como identificadores (claves)
// de las propiedades de los objetos.
// Cada valor del tipo Symbol tiene asociado un valor del tipo String o
// Undefined que sirve únicamente como descripción del símbolo.

let id = Symbol("id");
let id2 = Symbol("id2");

console.log(id === id2);
console.log(id, id2);
console.log(typeof id, typeof id2);

//el parametro que recibe symbol es una etiqueta para diferenciar esta propiedad de de otro simbolo
const NOMBRE = Symbol("nombre");
const SALUDAR = Symbol("saludar");

const persona = {
  [NOMBRE]: "Kike",
  edad: 31,
};

console.log(persona);
//agregar propiedades al objeto mediante la notacion del punto
persona.NOMBRE = "Carlos MAdrigal";

console.log(persona);
console.log(persona.NOMBRE);
console.log(persona[NOMBRE]);

//agregar un metodo symbolo al objeto
persona[SALUDAR] = function () {
  console.log("Hola");
};

console.log(persona);
persona[SALUDAR]();

//recorrer el objeto para ver sus metodos y propiedades
for (const propiedad in persona) {
  console.log(propiedad);
  console.log(persona[propiedad]);
}

//listar los symbolos del objeto
//recibe el objeto(
console.log(Object.getOwnPropertySymbols(persona));
