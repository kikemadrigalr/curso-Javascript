// Una función generadora (constructor GeneratorFunction) es un tipo especial de función
// que sirve como una fábrica de iteradores. Cuando se ejecuta, regresa un nuevo objeto Generador.
// Una función se convierte en una Función Generadora si utiliza la sintáxis function*.
//hace que el codigo de una función iterable

function* iterable() {
  yield "hola";
  console.log("Hola Consola");
  yield "hola 2";
  console.log("Mas Instrucciones de codigo");
  yield "hola 3";
  yield "hola 4";
}

//la funcion generadora permite acceder directamente al iterador
//no hace falta hacer uso de la sintaxis iterable[Symbol.iterator]()
let iterador = iterable();

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());

//recorrer
for (let y of iterador) {
  console.log(y);
}

//obetener en un arreglo cada elemento del iterable
const arr = [...iterable()];
console.log(arr);

function cuadrado(valor) {
  setTimeout(() => {
    return console.log({
      valor,
      resultado: valor * valor,
    });
  }, Math.random() * 1000);
}

function* generador(){
  console.log("Inicia Genereador")
  yield cuadrado(0)
  yield cuadrado(1)
  yield cuadrado(2)
  yield cuadrado(3)
  yield cuadrado(4)
  yield cuadrado(5)
  console.log("Termina Generador")
}

let gen = generador()

for(let y of gen){
  console.log(y)
}