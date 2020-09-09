function contarCaracter(cadena) {
  if (typeof cadena != "string") {
    console.log("El valor ingresado no es una cadena de texto");
  } else {
    let cantidadCaracter = cadena.length;
    console.log(
      `La cadena De texto esta compuesta por ${cantidadCaracter} caracteres`
    );
  }
}

contarCaracter("Hola soy una cadena de Texto");
contarCaracter("Texto");
contarCaracter(5);
contarCaracter(true);
contarCaracter([]);

function cortarCadena(cadena, caracteres) {
  if (typeof cadena != "string") {
    console.log("El valor ingresado no es una cadena de texto");
  } else if (typeof caracteres != "number") {
    console.log("El valor ingresado no es un Numero");
  } else {
    let nuevaCadena = cadena.slice(0, caracteres);
    console.log(nuevaCadena);
  }
}

cortarCadena("Caracol", 4);
cortarCadena("cadena de caracteres", 9);
cortarCadena("cadena de caracteres", true);
cortarCadena(9, 4);

function separarTexto(texto, separador) {
  if (texto === "") {
    console.log("El texto Ingresado es una cadena Vacia, no se puede separar");
  } else if (typeof texto != "string") {
    console.log("El valor ingresado no es una cadena de texto");
  } else if (typeof separador === "number" || typeof separador === "boolean") {
    console.log("El valor del Separador no es permitido");
  } else {
    let palabras = texto.split(separador);

    console.log(palabras);
  }
}

let espacio = " ";

separarTexto("hola soy yo", espacio);
separarTexto("hola soy yo", true);
separarTexto(9, true);
separarTexto("", true);

function repetirCadena(cadena, repeticiones) {
  if (typeof cadena != "string") {
    console.log("El valor ingresado no es una cadena de texto");
  } else if (typeof repeticiones != "number") {
    console.log("El valor ingresado no es un Numero");
  } else {
    cadena = cadena + " ";
    let cadenaRepetida = cadena.repeat(repeticiones);
    console.log(cadenaRepetida);
  }
}

repetirCadena("hola", 3);
repetirCadena("mi nombre es", 5);
repetirCadena("aqui hay alguien", 2);
repetirCadena("hola", true);
