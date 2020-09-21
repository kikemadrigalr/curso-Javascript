// En el contexto global del navegador, this hace referencia a window
console.log(this);
console.log(window);

console.log(window === this);
this.nombre = "Contexto Global";
console.log(this.nombre);

function imprimir() {
  console.log(this.nombre);
}

imprimir();

//aqui this toma el contexto del objeto donde fue creada la funcion
//es decir dentro del objeto, por lo tanto el contexto es el objeto obj
const obj = {
  nombre: "contexto objeto",
  imprimir: function () {
    console.log(this.nombre);
  },
};

obj.imprimir();

//la funcion imprimir hace referencia a la funcion imprimir creada en el objeto global
//pero al ser invocada por el objeto obj2, this toma el contexto del objeto.
//la asignacion de la funcion, tiene el mismo efecto como si la funcion se hubiese creaado dentro del objeto
const obj2 = {
  nombre: "contexto objeto 2",
  imprimir,
};

obj.imprimir();

//imprimir al declararse como arrow function, esta toma el contexto padre, del objeto donde se declaro la funcion
//es decir toma como contexto el objeto global al ser padre del objeto obj3
//la arrow function no crea un contexto interno sino que hereda el contexto superior
const obj3 = {
  nombre: "contexto objeto 3",
  imprimir: () => {
    console.log(this.nombre);
  },
};

obj3.imprimir();

//al crear una funcion constructora, esta crea su propio scope y this toma ese contexto
// asi al devolver this este retorna el nombre que se esta enviando por parametro a la funcion constructora
function persona(nombre) {
  this.nombre = nombre;

  return console.log(this.nombre);
}
let kike = persona("kike");

// si en lugar se retorna una function
// al tener una propiedad nombre esta tomara el contexto a donde se retorna esa funcion
//en este caso el contexto global
function Persona(nombre) {
  this.nombre = nombre;

  return function () {
    console.log(this.nombre);
  };
}

let yo = new Persona("carlos");
yo();

// si se retorna como arrow function, toma el scope de la funcion constructora, por ser el contexto superior
function Persona(nombre) {
  this.nombre = nombre;

  return () => console.log(this.nombre);
}

let yo = new Persona("carlos");
yo();

//se guarda el contexto de la funcion
// y en caso de retornar una funcion anonima, este siga enlazada al contexto de la funcion donde se creo
function Persona(nombre) {
  that = this;
  that.nombre = nombre;

  return function () {
    console.log(this.nombre);
  };
}
