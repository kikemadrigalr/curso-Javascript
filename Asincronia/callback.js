// CALLBACK
// Primer mecanismo de manejar la asincronia en JS

// Una función de callback es una función que se pasa a otra función como un argumento,
// que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

function cuadradoCallback(valor, callback) {
  setTimeout(() => {
    callback(valor, valor * valor);
  }, 0 | (Math.random() * 1000));
}

cuadradoCallback(0, (valor, result) => {
  console.log("Inicia Callback");
  console.log(`Callback: ${valor}, ${result}`);
  cuadradoCallback(1, (valor, result) => {
    console.log(`Callback: ${valor}, ${result}`);
    cuadradoCallback(2, (valor, result) => {
      console.log(`Callback: ${valor}, ${result}`);
      cuadradoCallback(3, (valor, result) => {
        console.log(`Callback: ${valor}, ${result}`);
        cuadradoCallback(4, (valor, result) => {
          console.log(`Callback: ${valor}, ${result}`);
          cuadradoCallback(5, (valor, result) => {
            console.log(`Callback: ${valor}, ${result}`);
            console.log("Fin Callback");
            console.log("Callback HELL!!!!!!");
            console.log("https://callbackhell.com");
          });
        });
      });
    });
  });
});
