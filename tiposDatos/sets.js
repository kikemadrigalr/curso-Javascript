// El objeto Set permite almacenar valores únicos de cualquier tipo,
// incluso valores primitivos u referencias a objetos.

//declarar un set
const set = new Set([
  1,
  2,
  3,
  3,
  4,
  5,
  true,
  false,
  false,
  {},
  {},
  "hola",
  "HOLA",
]);

console.log(set);

//tamano de un set con la propiedad size
console.log(set.size);

const set2 = new Set();

//para agregar valores a un set se utiliza su metodo add
set2.add(1);
set2.add(2);
set2.add(1);
set2.add(2);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add({});
set2.add(true);

console.log(set2);
console.log(set2.size);

//recorrer un set
console.log("Recorriendo SET");
for (const item of set) {
  console.log(item);
}

console.log("Recorriendo SET 2");
set2.forEach((item) => {
  console.log(item);
});

//para acceder a las posiciones de un set, debemos hacer que se cmporte como un arreglo
//usando Array.from

let arr = Array.from(set);
console.log(arr);
console.log(arr[0]);
console.log(arr[5]);

//el metodo delete elimina un elemento del set
set.delete("HOLA");
console.log(set);

//el metodo has, busca si un elemento existe dentro del set
//devuelve true en caso que consiga el elemento
console.log(set.has("hola"));
console.log(set.has(19));

//metodo clear elimina todos los elementos deñl set
set2.clear();
console.log(set2);
