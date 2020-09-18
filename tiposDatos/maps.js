//El objeto Map almacena pares clave/valor.
//Cualquier valor (tanto objetos como valores primitivos) pueden ser usados como clave o valor.

//declarar un nuev map
const mapa = new Map();

//asignar valores a un map con el metodo set
//recibe un par llave, valor
//tambien permite reescribir o modificar los valores de una set
mapa.set("nombre", "carlos");
mapa.set("apellido", "madrigal");
mapa.set("edad", 31);

console.log(mapa);
//metodo size devuelve el numero de elemtos del ,map
console.log(mapa.size);

//metodo has evalua si existe o no una llave (propiedad) en el map, devuelve true o false
console.log(mapa.has("correo"));
console.log(mapa.has("edad"));

//metodo get para obtener el valor de una llave, recibe el nombre de la llave o propiedad
console.log(mapa.get("nombre"));

//metodo delete permite eliminar una estrada o propiedad, recibe el nombre de una llave
mapa.delete("apellido");

//los nombres de llaves en un map puede ser un number, un bollean, objeto, etc
mapa.set(19, "diecinueve");
mapa.set(false, "falso");
mapa.set({}, {});

//recorrer un map
for (const [key, value] of mapa) {
  console.log(`Llave ${key}, valor ${value}`);
}

//inicializar un map desde su constructor
//se debe usar la notacion de los corchetes para cada par llave valor
const mapa2 = new Map([
  ["nombre", "Sascha"],
  ["edad", 6],
  ["animal", "perro"],
  [null, "nulo"],
]);

console.log(mapa2);

//los metodos keys y values permiten obtener las llaves y los valores por separado
//de un map respectivamente, mediante el uso de la destructuracion, y la notacion de los corchetes

const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...map2.values()]
