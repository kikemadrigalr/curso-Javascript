// El objeto WeakSet  te deja almacenar y mantener objectos debilmente en una colección.

//No se puede inicializar un ws en la declaracion desde su constructor
// const ws = new WeakSet([1,2,3,2,3,4,true,false,true,{},"hola","HOLA",{}]);

const ws = new WeakSet();

//para agregar los valores deben hacerse de uno en uno usando el metodo add
//solo aceptan referencias debiles (objetos)

let valor1 = { valor: 1 };
let valor2 = { valor: 2 };
let valor3 = { valor: 3 };

ws.add(valor1);
ws.add(valor2);

console.log(ws);

//no son objetos iterables, y no tienen metodo legth ni size

//el metodo has permite evaluar si existe alguna referencia, devuelve true o false
console.log(ws.has(valor2));
console.log(ws.has(valor3));

//el metodo delete permite eliminar referencias del weakset
ws.delete(valor2);

//
ws.add(valor2);
ws.add(valor3);

setInterval(() => console.log(ws), 1000);

//una vez el los valores de las referencias de un ws sean nulas o undefine
//dejan de existir para js
//el motor de basura del navegador las elimina

setTimeout(() => {
  valor1 = null;
  valor2 = null;
  valor3 = null;
}, 5000);
