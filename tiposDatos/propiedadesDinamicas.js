//Propiedades Dinamicas en Objetos
// Primite crear propiedades dinamicas a un objeto

//Se pueden crear propiedades dinamicas cuando se crea el objeto
let aleatorio = Math.round(Math.random() * 100 + 5);

const objUsuarios = {
  propiedad: "Valor",
  [`id_${aleatorio}`]: "Valor Aleatorio",
};

console.log(objUsuarios);

const usuarios = ["jon", "luis", "irma", "Miguel", "kenai", "karla"];

//aca se crea la propiedad dinamica al objeto, po cada elemento del arreglo usuarios
//es necesario utilizar la notacion de los corhetes
usuarios.forEach((usuario, index) => {
  objUsuarios[`id_${index}`] = usuario;
});
console.log(usuarios);
