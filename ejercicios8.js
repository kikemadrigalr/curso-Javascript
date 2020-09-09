// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos,
// el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente,
// pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
const ordenarNumeros = (numeros = undefined) => {
  if (numeros === undefined)
    return console.warn("No ingresaste un arreglo de números");

  if (!(numeros instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo");

  if (numeros.length === 0) return console.error("El arreglo esta vacio");

  for (let num of numeros) {
    if (typeof num !== "number")
      return console.error(`El valor ${num} ingresado NO es un número`);
  }

  let asc = numeros.sort((a, b) => a - b);
  let desc = numeros
    .map((el) => el)
    .sort()
    .reverse();

  return console.log({
    ascendiente: asc,
    descreciente: desc,
  });
};
ordenarNumeros([]);
ordenarNumeros([7, 5, 7, 8, 6, 1, 2, 0, 3, 4]);
ordenarNumeros([7, 5, 7, 8, 6]);

/*************************Solucion de video*********************** */
const ordenarArreglo = (arr = undefined) => {
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
    arr,
    asc: arr.map((el) => el).sort(),
    desc: arr
      .map((el) => el)
      .sort()
      .reverse(),
  });
};

ordenarNumeros([]);
ordenarNumeros([7, 5, 7, 8, 6, 1, 2, 0, 3, 4]);
ordenarNumeros([7, 5, 7, 8, 6]);

// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados,
// pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

/*****************solucion del video**************** */
const eliminarDuplicados = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de números");

  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo");

  if (arr.length === 0) return console.error("El arreglo esta vacio");

  if (arr.length === 1)
    return console.warn("El arreglo debe tener al menos 2 elementos");

  return console.info({
    original: arr,
    sinDuplicados: arr.filter(
      (value, index, self) => self.indexOf(value) === index
    ),
  });
};
eliminarDuplicados([1, 2, 3, "k", 2, 4, 3]);

/* usando set nuevo tipo de dato en js*/
/*permite generar un objeto enel cual no se permitan elemen tos duplicados*/
const eliminarDuplicados = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de números");

  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo");

  if (arr.length === 0) return console.error("El arreglo esta vacio");

  if (arr.length === 1)
    return console.warn("El arreglo debe tener al menos 2 elementos");

  return console.info({
    original: arr,
    sinDuplicados: [...new Set(arr)],
  });
};
eliminarDuplicados([1, 2, 3, "k", 2, 4, 3]);

// 26) Programa una función que dado un arreglo de números obtenga el promedio,
// pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
const promediar = (numeros = undefined) => {
  if (numeros === undefined)
    return console.warn("No ingresaste un arreglo de números");

  if (!(numeros instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo");

  if (numeros.length === 0) return console.error("El arreglo esta vacio");

  for (let num of numeros) {
    if (typeof num !== "number")
      return console.error(`El valor ${num} ingresado NO es un número`);
  }

  let sumatoria = 0;
  for (let i = 0; i < numeros.length; i++) {
    sumatoria = sumatoria + numeros[i];
  }
  return console.log(
    `El promedio de los valores en el array es: ${sumatoria / numeros.length}`
  );
};

promediar();
promediar(true);
promediar([]);
promediar([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
promediar([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 10, 11, 12, 13, 14, 15]);

/***********Solucion del video********** */
// Usando el metodo reduce de ES6

const promedio = (arr = undefined) => {
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
    arr.reduce((total, num, index, arr) => {
      total += num;

      if (index === arr.length - 1) {
        return `El promedio de ${arr.join(" + ")} es ${total / arr.length}`;
      } else {
        return total;
      }
    })
  );
};

promedio();
promedio(true);
promedio([]);
promedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
promedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 10, 11, 12, 13, 14, 15]);
