// El objeto WeakMap es una colección de pares clave/valor
// en la que las claves son objetos y los valores son valores arbitrarios.
//no son elementos iterables

//no se puede inicializar un weakmap desde su constructor en la declaracion
// const wm = new WeakMap([
//   ["nombre", "Sascha"],
//   ["edad", 6],
//   ["animal", "perro"],
//   [null, "nulo"],
// ]);

//solo se pueden inicializar los valores un weakmap
//con llaves que sean objetos
// y que esten referenciadas a una variable

const wm = new WeakMap();

//se inicializan como objetos vacio porque su contenido se agrega mediante el metodo set
let llave1 = {};
let llave2 = {};
let llave3 = {};

//Metodo set se usa ara agregar los valores del weakmap
//recibe un par llave valor
wm.set(llave1, 1);
wm.set(llave2, 2);
console.log(wm);

//metodo has para evaluar si existe una referencia en el wm devuelve true o false
console.log(wm.has(llave3));
console.log(wm.has(llave2));

//metodo get obtiene el valor de una llave
console.log(wm.get(llave1));
console.log(wm.get(llave2));
console.log(wm.get(llave3));

//metodo delete permite eliminar un par llave - valor
wm.delete(llave2);

//al igual que en el weakset, el weakmap automaticamente elimina las referencias cuyo valor se haga nulo
setInterval(() => console.log(wm), 1000);

setTimeout(() => {
  llave1 = null;
  llave2 = null;
  llave3 = null;
}, 5000);
