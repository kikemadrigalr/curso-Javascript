// JSON es una sintaxis para serializar objetos, arreglos, números, cadenas, booleanos y nulos.
// Está basado sobre sintaxis JavaScript pero es diferente a ella: algo JavaScript no es JSON,
// y algo JSON no es JavaScript.

//El método JSON.parse() analiza una cadena de texto como JSON,
//transformando opcionalmente  el valor producido por el análisis.

const json = {
  cadena: "Jon",
  numero: 35,
  boolean: true,
  arreglo: ["correr", "comer", "programar"],
  objeto: {
    twitter: "@untwitter",
    email: "miemail@mail.com",
  },
  nulo: null,
};

//parse convierte un valor json en su valor javascript
console.log(JSON.parse("{}"));
console.log(JSON.parse("[1,2,3]"));
console.log(JSON.parse("true"));
console.log(JSON.parse("false"));
console.log(JSON.parse("19"));
console.log(JSON.parse("{}"));
console.log(JSON.parse("null"));

//stringify convierte un valor javascript a notacion json
console.log(JSON.stringify({}));
console.log(JSON.stringify([1, 2, 3]));
console.log(JSON.stringify(true));
console.log(JSON.stringify(false));
console.log(JSON.stringify(19));
console.log(JSON.stringify({}));
console.log(JSON.stringify(undefined));
console.log(JSON.stringify({ x: 2, y: 3 }));

console.log(JSON.stringify(json));

console.log(
  JSON.parse(
    '{"cadena": "Jon","numero": 35,"boolean": true,"arreglo": ["correr", "comer", "programar"],"objeto": {"twitter": "@untwitter","email": "miemail@mail.com",},"nulo": null,}'
  )
);
