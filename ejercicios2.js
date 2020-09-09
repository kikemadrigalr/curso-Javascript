function invertirCadena(cadena) {
  if (typeof cadena != "string") {
    console.warn("El dato ingresado no es una cadena de Texto");
  } else if (!cadena) {
    console.warn("Ingresaste una cadena vacia");
  } else {
    let tamanio = cadena.length;
    let cadenaInvertida = "";

    while (tamanio >= 0) {
      console.log(tamanio);
      cadenaInvertida = cadenaInvertida + cadena.charAt(tamanio);
      tamanio--;
    }

    console.log(`El texto invetido es: ${cadenaInvertida}`);
  }
}

invertirCadena("Hola soy yo");
invertirCadena("Hola");
invertirCadena("Hoy");

// contar palabras
function buscarContar(texto, palabraBuscar) {
  if (texto === "") {
    console.log("El texto Ingresado es una cadena Vacia, no se puede separar");
  } else if (typeof texto != "string") {
    console.log("El valor ingresado no es una cadena de texto");
  } else if (typeof palabraBuscar != "string") {
    console.log("La palabra a buscar no es una cadena de texto");
  } else {
    const separador = " ";
    let contador = 0;
    texto = texto.toLowerCase();
    palabraBuscar = palabraBuscar.toLowerCase();
    let palabras = texto.split(separador);
    const patron = new RegExp(palabraBuscar, "i");

    for (let i = 0; i < palabras.length; i++) {
      if (patron.test(palabras[i]) === true) {
        contador = contador + 1;
      }
    }
    console.log(
      `La palabra ${palabraBuscar.toUpperCase()} se repite ${contador} veces en la cadena "${texto}"`
    );
  }
}

buscarContar("hola mundo, adios mundo, mundo, mundo mundo", "mundo");
buscarContar("hola mundo, hola niños", "Hola");
buscarContar(
  "Una niña, dos niñas, tres niños, cuatro niñas, cinco niñas",
  "niñas"
);
buscarContar(
  "una Palabra, 2 palabras, tres palabras, cuatro paLABRAS, cinco palabras.",
  "palabras"
);

//palindromo
function palindromo(cadena) {
  if (typeof cadena != "string") {
    console.warn("El dato ingresado no es una cadena de Texto");
  } else if (!cadena) {
    console.warn("Ingresaste una cadena vacia");
  } else {
    cadena = cadena.toLowerCase();
    let tamanio = cadena.length;
    let cadenaInvertida = "";

    while (tamanio >= 0) {
      // console.log(tamanio);
      cadenaInvertida = cadenaInvertida + cadena.charAt(tamanio);
      tamanio--;
    }

    if (cadenaInvertida === cadena) {
      console.log("El texto ingresado es un palindromo");
      console.log(cadena, cadenaInvertida);
      return true;
    } else {
      console.log("El taxto ingresado no es un palindromo");
      false;
    }
  }
}

palindromo("salas");
palindromo("Arepera");

//8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
//pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

// function eliminarPatron(texto, buscar) {
//   let patron = new RegExp(buscar, "i");
//   const separador = " ";
//   let palabras = texto.split(separador);
//   let nuevasPalabras = [];
//   // console.log(palabras.length);

//   for (let i = 0; i <= palabras.length; i++) {
//     if (patron.test(palabras[i]) === true) {
//       nuevasPalabras.puesh(palabras[i].replace(patron, ""));
//       // console.log(palabras[i]);
//     }
//   }

//   console.log(palabras);
//   console.log(patron);
//   console.log(nuevasPalabras);

// }

function eliminarPatron(texto, patronBuscar) {
  if (texto === "") {
    console.log("El texto Ingresado es una cadena Vacia");
  }

  if (patronBuscar === "") {
    console.log("El texto Ingresado es una cadena Vacia");
  }

  if (typeof texto != "string") {
    console.log("El valor ingresado no es una cadena de texto");
  }

  if (typeof patronBuscar != "string") {
    console.log("El Patron a buscar no es una cadena de texto");
  }

  const patron = new RegExp(patronBuscar, "gi");
  let res = texto.replace(patron, "");
  console.log(res);
}

eliminarPatron("ab1 ab2 ab3", "ab");
eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
