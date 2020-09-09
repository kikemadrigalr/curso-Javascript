// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
const numeroAleatorio = function () {
  const min = 501;
  const max = 600;
  const numero = Math.random() * (max - min) + min;
  return Math.round(numero);
};

numeroAleatorio();
numeroAleatorio();
numeroAleatorio();

// solucion del video
const aleatorio = () => console.info(Math.round(Math.random() * 100) + 500);

aleatorio();

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro),
// pe. miFuncion(2002) devolverá true.

const numeroCapicua = function (numero) {
  if (!numero || typeof numero != "number") {
    console.log("Debe Ingresar un numero");
  } else {
    let numeroString = numero.toString();
    let numeroReves = numeroString.split("").reverse();

    if (parseInt(numero) === parseInt(numeroReves.join(""))) {
      console.log(
        `El numero ${numero} es Capicua, Al reves se lee ${parseInt(
          numeroReves.join("")
        )} `
      );
    } else {
      console.log(
        `El numero ${numero} NO es Capicua, Al reves se lee ${parseInt(
          numeroReves.join("")
        )}`
      );
    }
  }
};

numeroCapicua(2002);
numeroCapicua(2020);
numeroCapicua(1001);
numeroCapicua(12);
numeroCapicua(123);
numeroCapicua(22222);

//solucion del video Jon
const capicua = (numero = 0) => {
  if (!numero) return console.warn("No Ingresaste un Numero");

  if (typeof numero !== "number")
    return console.warn(`El valor ${numero} ingresado no es un Numero`);

  numero = numero.toString();
  let alReves = numero.split("").reverse().join("");

  return numero === alReves
    ? console.info(
        `Si es Capicua. Numero Original ${numero}, Numero al Reves ${alReves}`
      )
    : console.info(
        `No es capicua. Numero Original ${numero}, Numero al reves ${alReves}`
      );
};

capicua(2002);
capicua(19);
capicua(212.212);

// 11) Programa una función que calcule el factorial de un número
// (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n),
// pe. miFuncion(5) devolverá 120.

const factorial = function (numero) {
  if (typeof numero !== "number") {
    return console.log(`Debe Ingresar un numero`);
  }

  if (numero < 0) {
    return console.log(`El numero debe ser un entero positivo`);
  }

  if (numero === 0) {
    return console.log(1);
  }

  let factorial = 1;
  while (numero > 1) {
    factorial *= numero;
    numero--;
  }
  console.log(factorial);
};

factorial(3);
factorial(4);
factorial(5);
factorial(0);
factorial();
factorial([]);

//factorial Usando una funcion recursiva
function factorialRecursivo(numero) {
  if (numero == 0) {
    return 1;
  } else {
    return factorialRecursivo(numero - 1) * numero;
  }
}

factorial(3);
factorial(4);
factorial(5);
factorialRecursivo(3);
factorialRecursivo(4);
factorialRecursivo(5);

//Solucion del video
const factorial = (numero) => {
  if (typeof numero !== "number")
    return console.warn(`Debe Ingresar un numero`);

  if (Math.sign(numero) === -1)
    return console.error("El numero no puede ser negativo");

  if (numero === 0) return console.info(`El factorial de ${numero} es 1`);
  let factorial = 1;

  for (let i = numero; i > 1; i--) {
    factorial *= i;
  }

  return console.info(`El factorial de ${numero} es ${factorial}`);
};

factorial(3);
factorial(4);
factorial(5);
