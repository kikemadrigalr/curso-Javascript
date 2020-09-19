// El objeto Proxy se usa para definir un comportamiento personalizado
// para operaciones fundamentales (por ejemplo, para observar propiedades,
// cuando se asignan, enumeración, invocación de funciones, etc).

// handler
// Objeto que gestiona las intercepciones a las propiedades del objeto proxy.

// traps
// Son los métodos interceptores que proveen acceso a las propiedades.

// target
// El objeto que virtualiza este objeto.
// Suele usarse como backend de almacenamiento del proxy.
// Invariantes (semántica que no acepta cambios) respecto
// a la no extensibilidad del objeto o propiedades no
// configurables se verifican contra este target.

//target. Objeto original
const persona = {
  nombre: "",
  apellido: "",
  edad: 0,
};

//handler o manejador
//el metodo set es que se va a encargar de validar y asignar los valores al objeto
const manejador = {
  set(obj, props, valor) {
    //traps
    if (Object.keys(obj).indexOf(props) === -1) {
      return console.error(
        `La propiedad "${props}" No existe en el objeto persona `
      );
    }

    if (
      (props === "nombre" || props === "apellido") &&
      !/^[A-Za-zÑñÁáÉéÍíÓóÚúû\s]+$/g.test(valor)
    ) {
      console.error(
        `La propiedad "${props}" solo acepta letras y espacios en blanco`
      );
    }
    obj[props] = valor;
  },
};

const kike = new Proxy(persona, manejador);
kike.nombre = "carlos";
kike.apellido = "madrigal";
kike.edad = 31;
kike.twitter = "@kikemadrigal";
console.log(kike);
