// 12) Programa una función que determine si un número es primo
// (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
const numeroPrimo = (numero = undefined) => {
  if (!numero) return console.log("Debe Ingresar un Numero");

  if (typeof numero !== "number")
    return console.log("Debes ingresar un numero");

  if (numero === 0) return console.log(`El numero ${numero} No es Primo`);

  if (numero === 1) return console.log(`El numero ${numero} Es la Unidad`);

  if (numero === 2) return console.log(`El numero ${numero} Es Primo`);

  if (numero <= 0) return console.log("Debe Ingresar un numero Positivo");

  for (i = 1; i < numero; i++) {
    if (numero % (i + 1) === 0) {
      return console.log(`El numero ${numero} No es Primo`);
    }

    if (numero / (i + 1) < i + 1) {
      return console.log(`El numero ${numero} Es Primo`);
    }
  }
};
//Numeros primos 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89 y 97.
numeroPrimo(0);
numeroPrimo(1);
numeroPrimo(-4);
numeroPrimo();
numeroPrimo(7); //primo
numeroPrimo(113); // Primo
numeroPrimo(6); // no primo
numeroPrimo(114); // no primo
//Primos
numeroPrimo(2);
numeroPrimo(3);
numeroPrimo(5);
numeroPrimo(7);
numeroPrimo(13);
numeroPrimo(17);
numeroPrimo(19);
numeroPrimo(23);
numeroPrimo(29);
numeroPrimo(31);
numeroPrimo(37);
numeroPrimo(41);
//no primos
numeroPrimo(4);
numeroPrimo(9);
numeroPrimo(14);
numeroPrimo(20);
numeroPrimo(21);
numeroPrimo(24);
numeroPrimo(28);
numeroPrimo(30);
numeroPrimo(36);
numeroPrimo(40);

//Solución del video Jon
const numeroPrimo = (numero = undefined) => {
  if (numero === undefined) return console.warn("Debe Ingresar un Numero");

  if (typeof numero !== "number")
    return console.log("El valor Ingresado NO es un numero");

  if (numero === 0) return console.log(`El numero no puede ser 0`);

  if (numero === 1) return console.log(`El numero no Pude ser 1`);

  if (Math.sign(numero) === -1)
    return console.log("Debe Ingresar un numero Positivo");

  let divisible = false;

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      divisible = true;
      break;
    }
  }

  return divisible
    ? console.log(`El numero ${numero} NO es Primo`)
    : console.log(`El numero ${numero} SÍ es Primo`);
};

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const par = (numero) => {
  if (typeof numero !== "number")
    return console.log("Debes ingresar un numero");

  if (numero % 2 === 0) {
    return console.log(`El numero ${numero} es Par`);
  }

  if (numero % 2 !== 0) {
    return console.log(`El numero ${numero} es Impar`);
  }
};

par(1);
par(2);
par(3);
par(4);
par(5);
par(6);
par(7);
par(8);
par(9);
par(10);

//solucion Del video Jon
const numeroParImpar = (numero) => {
  if (numero === undefined) return console.warn("Debe Ingresar un Numero");

  if (typeof numero !== "number")
    return console.log("El valor Ingresado NO es un numero");

  return numero % 2 === 0
    ? console.info(`El numero ${numero} Par`)
    : console.info(`El numero ${numero} es Impar`);
};

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
const convertirGrados = (grados, tipo) => {
  if (!grados)
    return console.log("Debe ingresar un valor para los grados a convertir");

  if (typeof grados !== "number")
    return console.log("El valor ingresado debe ser un numero");

  if (typeof tipo !== "string")
    return console.log(
      "El valor ingresado debe ser C para Celsius o F para Fahrenheit"
    );

  if (!tipo)
    return console.log("Debe ingresar un valor C o F para el tipo de grados");

  if (tipo !== "c" && tipo !== "f")
    return "Debe ingresar un valor C o F para el tipo de grados";

  const c = "c";
  const f = "f";
  let gradosF, gradosC;

  if (tipo.toLowerCase() === c) {
    gradosF = grados * 1.8 + 32;
    return console.log(
      `${grados} Grados Celsius es Equivalente a ${gradosF} Fahrenheit`
    );
  }

  if (tipo.toLowerCase() === f) {
    gradosC = (grados - 32) / 1.8;
    return console.log(
      `${grados} Grados Fahrenheit es Equivalente a ${gradosC} Celsius `
    );
  }
};

convertirGrados(30, "c");
convertirGrados(86, "f");
convertirGrados(46, "c");
convertirGrados(55, "f");
convertirGrados(30, "d");
convertirGrados("f");

//solucion del video Jon

const convertirGrados = (grados = undefined, unidad = undefined) => {
  if (grados === undefined)
    return console.warn("Debe ingresar un valor para los grados a convertir");

  if (typeof grados !== "number")
    return console.error(`El valor "${grados} ingresado No es un Numero`);

  if (unidad === undefined)
    return console.warn("No ingresaste el tipo de grados a convertir");

  if (typeof unidad !== "string")
    return console.error(
      `El valor ${unidad} ingresado, No es una cadena de texto`
    );

  if (unidad.length !== 1 || !/(C|F)/.test(unidad))
    return console.warn("Valor de unidad No reconocido");

  if (unidad === "C") {
    return console.info(`${grados}°C = ${Math.round(grados * (9 / 5) + 32)}°F`);
  } else if (unidad === "F") {
    return console.info(
      `${grados}°F = ${Math.round((grados - 32) * (5 / 9))}°C`
    );
  } else {
    return console.error("El tipo de grados a convertir No es Valido");
  }
};

convertirGrados(30, "C");
convertirGrados(86, "F");
convertirGrados(46, "C");
convertirGrados(55, "F");
convertirGrados(0, "C");
convertirGrados(100, "C");
