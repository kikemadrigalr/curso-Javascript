// Para ser iterable, un objeto debe implementar el método @@iterator,
// lo cual significa que el objeto (o uno de los objetos dentro de su cadena de prototipos)
// debe tener una propiedad con un identificador Symbol.iterator:

// [Symbol.iterator]	Una función sin argumentos que retorna un objeto, de acuerdo al protocolo iterador.

const iterable = [1, 2, 3, 4, 5];
// const iterable = new Set([1, 2, 3, 4, 5]);
// const iterable = "Hola Mundo";
// const iterable = new Map([
//   ["nombre", "carlos"],
//   ["edad", 31],
// ]);

//para acceder al iterador del iterable
const iterador = iterable[Symbol.iterator]();

console.log(iterable);
console.log(iterador);

//Un objeto es un iterador cuando este implementa un método next()
// retorna un objeto con dos propiedades:
//done (boleano),
//value - cualquier valor de JavaScript retornado por el iterador. Puede ser omitido cuando el valor de done es true.

//el metodo next de los ietrables nos permiten recorrer el iterable
let next = iterador.next();

while (!next.done) {
  console.log(next.value);
  next = iterador.next();
}
