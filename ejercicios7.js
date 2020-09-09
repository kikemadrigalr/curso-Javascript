// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado,
// pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
const elevarCuadrado = (numeros = undefined) => {
  if (numeros === undefined)
    return console.log("Debes Ingresar un array de numeros");

  if (numeros.length === 0) return console.log("El array ingresado está Vacio");

  if (!(numeros instanceof Array))
    return console.log(`El valor ${numeros} no es un Array de Numeros`);

  numeros = numeros.filter((numero) => typeof numero === "number");

  let cuadrados = [];

  for (let i = 0; i < numeros.length; i++) {
    cuadrados.push(Math.pow(numeros[i], 2));
  }

  return cuadrados;
};

elevarCuadrado();
elevarCuadrado("hola");
elevarCuadrado(345);
elevarCuadrado([1, 2, 3]);
elevarCuadrado([1, 4, 5]);
elevarCuadrado([1, 4, 5, "", "h", 7, 9]);

//solucion video
const devolverCuadrados = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de números");

  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo");

  if (arr.length === 0) return console.error("El arreglo esta vacio");

  for (let num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor ${num} ingresado NO es un número`);
  }

  const newArr = arr.map((el) => el * el);

  return console.info(
    `Arreglo Original: ${arr}. Arreglo Elevado al cuadrado ${newArr}`
  );
};

devolverCuadrados();
devolverCuadrados(true);
devolverCuadrados({});
devolverCuadrados([]);
devolverCuadrados([1, "3", 4]);
devolverCuadrados([1, 2, 3, 4, 5]);
// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array,
// pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
const numeroMayorMenor = (numeros = undefined) => {
  if (numeros === undefined)
    return console.log("Debes Ingresar un array de numeros");

  if (numeros.length === 0) return console.log("El array ingresado está Vacio");

  if (!(numeros instanceof Array))
    return console.log(`El valor ${numeros} no es un Array de Numeros`);

  numeros = numeros.filter((numero) => typeof numero === "number");

  let j = 0,
    k = 0;
  (menor = numeros[j]), (mayor = numeros[k]), (mayorMenor = []);

  for (let i = 1; i <= numeros.length; i++) {
    if (numeros[j] > numeros[i]) {
      menor = numeros[i];
      j = i;
    }

    if (numeros[k] < numeros[i]) {
      mayor = numeros[i];
      k = i;
    }
  }

  mayorMenor.push(mayor, menor);
  return mayorMenor;
};

numeroMayorMenor();
numeroMayorMenor(345);
numeroMayorMenor([2, 3, 5, 6, 0]);
numeroMayorMenor([2, -3, 5, 0, 6, 100, "", 54, "h", 201]);

//**********Solucion del video************/
const arrayMinMax = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de números");

  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo");

  if (arr.length === 0) return console.error("El arreglo esta vacio");

  for (let num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor ${num} ingresado NO es un número`);
  }

  return console.info(
    `Arreglo Original: ${arr}.\n Valor Mayor: ${Math.max(
      ...arr
    )}.\n Valor Menor: ${Math.min(...arr)}`
  );
};

arrayMinMax();
arrayMinMax(false);
arrayMinMax({});
arrayMinMax([]);
arrayMinMax([1, 4, 5, 99, 60]);
arrayMinMax([1, 4, 5, 99, 60, -1]);

// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos
// en el primero almacena los números pares y en el segundo los impares,
// pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const paresImpares = (numeros = undefined) => {
  if (numeros === undefined)
    return console.log("Debes Ingresar un array de numeros");

  if (numeros.length === 0) return console.log("El array ingresado está Vacio");

  if (!(numeros instanceof Array))
    return console.log(`El valor ${numeros} no es un Array de Numeros`);

  numeros = numeros.filter((numero) => typeof numero === "number");

  let pares = [],
    impares = [];

  for (let i = 0; i < numeros.length; i++) {
    numeros[i] % 2 === 0
      ? pares.push(numeros[i]) //par
      : impares.push(numeros[i]); //impar
  }

  return console.log({
    pares,
    impares,
  });
};

paresImpares();
paresImpares(234);
paresImpares([2, 3, 4, 5, 7, 8, 6, 9, 12, 11, 10]);
paresImpares([2, 3, 4, 5, 7, 8, 6, 9, 12, 11, 10, 0, -3, -4, -12]);

//**********Solucion del video************/
const separarParesImpares = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de números");

  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo");

  if (arr.length === 0) return console.error("El arreglo esta vacio");

  for (let num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor ${num} ingresado NO es un número`);
  }

  return console.info({
    pares: arr.filter((num) => num % 2 === 0),
    impares: arr.filter((num) => num % 2 === 1),
  });
};

separarParesImpares();
separarParesImpares({});
separarParesImpares(true);
separarParesImpares([]);
separarParesImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
separarParesImpares([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]);
