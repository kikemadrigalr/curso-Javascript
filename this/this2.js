//Metodos Call, Bind, Apply

// NOTA: Mientras la sintaxis de esta función es casi identica a la función apply(),
// la diferencia fundamental es que call() acepta una lista de argumentos,
// mientras apply() accepta un arreglo unico de argumentos.

// El método call() llama a una función con un valor this asignado y argumentos provistos de forma individual.
console.log(this);
this.lugar = "Contexto Global";

function saludar(saludo, aQuien) {
  console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
}

saludar("hola", "sascha");

const obj = {
  lugar: "Contexto objeto",
};

//el metodo call recibe el contexto sobre el cual quiero ejecutar la funcion
//en este caso saludar() se encuentra en el contextp global, como quiero ejecutarla para el contexto obj,
//se utiliza el metodo call para llamar ese contexto, se recibe como parametro
saludar.call(obj, "hola", "kike");

//si se utiliza el metodo call y se pasa un valor contexto nulo, tomara el contexto donde se ejecuta
saludar.call(null, "hola", "kike");
saludar.call(this, "hola", "kike");

saludar.apply(obj, ["adios", "madrigal"]);
saludar.apply(null, ["adios", "madrigal"]);
saludar.apply(this, ["adios", "madrigal"]);

// El método bind() crea una nueva función, que cuando es llamada, asigna a su operador  this el valor entregado,
// con una secuencia de argumentos dados precediendo a cualquiera entregados cuando la función es llamada.

const persona = {
  nombre: "kike",
  saludar: function () {
    console.log(`Hola ${this.nombre}`);
  },
};

persona.saludar();

//bind enlaza un contexto a otro diferente
const otraPersona = {
  saludar: persona.saludar.bind(persona),
};

otraPersona.saludar();
