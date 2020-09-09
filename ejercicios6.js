// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes,
// pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const contarVocales = (cadena = "") => {
  if (cadena === "") return console.log("Debes ingresar algo de texto");

  if (typeof cadena !== "string")
    return "El dato ingresado no es una cadena de texto";

  const patronVocales = /[aeiouáéíóú]/gi,
    patronConsonantes = /[^aeiou\s\d\W]/gi;

  let vocales = cadena.match(patronVocales),
    consonantes = cadena.match(patronConsonantes);
  return console.log(
    `En el Texto se encuentran ${vocales.length} Vocales y ${consonantes.length} Consonantes`
  );
};

contarVocales(
  "un texto cualquiera. porque necesito prOBAR??? la broma esta!!!!"
);
contarVocales("Hola Mundo");
contarVocales(900);
contarVocales();

//solucion del video
const contarLetras = (cadena = "") => {
  if (!cadena) return console.warn("No ingresaste una cadena de texto");

  if (typeof cadena !== "string")
    return console.error(
      `El valod ${cadena} ingresado, No es una cadena de texto`
    );

  let vocales = 0,
    consonantes = 0;

  cadena = cadena.toLowerCase();

  for (let letra of cadena) {
    if (/[aeiouáéíóúû]/.test(letra)) vocales++;

    if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;
  }

  return console.info({
    cadena,
    vocales,
    consonantes,
  });
};

contarLetras();
contarLetras();
contarLetras("Hola Mundo");
contarLetras("Un texto cualquiera");

// 19) Programa una función que valide que un texto sea un nombre válido,
// pe. miFuncion("Jonathan MirCha") devolverá verdadero.

const validarNombre = (nombre = "") => {
  if (nombre === "") return console.log("Debes ingresar tu nombre");

  if (typeof nombre !== "string")
    return "El dato ingresado no es una cadena de texto";

  const patronNombre = /^[A-Z]{1}[a-z]*\s[A-Z]{1}[a-z]*$/;

  if (patronNombre.test(nombre)) {
    return console.log(`El nombre ${nombre} Es Valido`);
  } else {
    return console.log(`El nombre ${nombre} No es Valido`);
  }
};

validarNombre("Carlos");
validarNombre("carlos madrigal");
validarNombre("Carlos M@drigal");
validarNombre("Carl0s Madrigal");
validarNombre("Carlos Madriga!");
validarNombre("Carlos Madrigal");

//solucion de video
const validarNombre = (nombre = "") => {
  if (!nombre) return console.warn("No ingresaste un nombre");

  if (typeof nombre !== "string")
    return console.error(
      `El valor ${nombre} ingresado, No es una cadena de texto`
    );

  let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúû\s]+$/g.test(nombre);

  return expReg
    ? console.info(`${nombre} Es un nombre Valido`)
    : console.info(`${nombre} No es un nombre Valido`);
};

validarNombre();
validarNombre(4);
validarNombre("Carlos");
validarNombre("carlos madrigal");
validarNombre("Carlos M@drigal");
validarNombre("Carl0s Madrigal");
validarNombre("Carlos Madriga!");
validarNombre("Carlos Madrigal");

// 20) Programa una función que valide que un texto sea un email válido,
// pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
const validarEmail = (email = "") => {
  if (email === "") return console.log("Debes ingresar tu email");

  if (typeof email !== "string")
    return "El dato ingresado no es una cadena de texto";

  // /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  //  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i;
  const patronEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

  if (patronEmail.test(email)) {
    return console.log(`El Email ${email} Es Valido`);
  } else {
    return console.log(`El Email ${email} No es Valido`);
  }
};

validarEmail();
validarEmail(1234);
validarEmail("alguien.com");
validarEmail("alguien@");
validarEmail("alguien@alguienmas.com");
validarEmail("alguien_123@alguienmas.com");

//solucion de video
const validarEmail = (email = "") => {
  if (!email) return console.warn("No ingresaste un Email");

  if (typeof email !== "string")
    return console.error(
      `El valor ${email} ingresado, No es una cadena de texto`
    );

  let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
    email
  );

  return expReg
    ? console.info(`${email} Es un Email Valido`)
    : console.info(`${email} No es un Email Valido`);
};

validarEmail();
validarEmail(1234);
validarEmail("alguien.com");
validarEmail("alguien@");
validarEmail("alguien@alguienmas.com");
validarEmail("alguien_123@alguienmas.com");

//fusion 19 20 Validar que una cadena de texto cumpla con los parametros de una expresion regular, que se pasan por parametros
const validarPatron = (cadena = "", patron = undefined) => {
  if (!cadena) return console.warn("No ingresaste una cadena texto a evaluar");

  if (typeof cadena !== "string")
    return console.error(
      `El valor ${cadena} ingresado, No es una cadena de texto`
    );

  if (patron === undefined)
    return console.warn("No ingresaste una patron texto a evaluar");

  if (!(patron instanceof RegExp))
    return console.error(
      `El valor ${patron} ingresado, No es una expresión regular`
    );

  let expReg = patron.test(cadena);

  return expReg
    ? console.info(`${cadena} Cumple con el patrón ingresado`)
    : console.info(`${cadena} No cumple con el patrón ingresado`);
};

validarPatron("carlos Madrigal");
validarPatron("carlos Madrigal", "/^[A-Za-zÑñÁáÉéÍíÓóÚúûs]+$/g");
validarPatron("carlos Madrigal", /^[A-Za-zÑñÁáÉéÍíÓóÚúû\s]+$/g);
validarPatron(
  "alguien@",
  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i
);
validarPatron(
  "alguien@alguienmas.com",
  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i
);
validarPatron(
  "alguien_123@alguienmas.com",
  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i
);
validarPatron(
  "alguien_123@alguienmas.com",
  new RegExp(
    "[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})",
    "i"
  )
);
