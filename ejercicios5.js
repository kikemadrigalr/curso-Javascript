// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
const binarioDecimal = (numero = undefined, base = undefined) => {
  if (numero === undefined) return console.log("No ingresaste un Numero");

  if (typeof numero !== "number")
    return console.log(`El valor ${numero} No es un Numero`);

  if (base === undefined)
    return console.log("No ingresaste la base para transformar");

  if (typeof base !== "number")
    return console.log(`El valor ${base} No es un Numero`);

  if (base !== 2 && base !== 10)
    return console.log(`La base ingresada no es valida para la conversion`);

  let alReves;

  let index = 0;
  let decimal = 0;

  if (base === 2) {
    numero = numero.toString();
    alReves = numero.split("").reverse();

    while (index < alReves.length) {
      decimal += parseInt(alReves[index], 2) * Math.pow(2, index);
      index++;
    }
    return console.log(
      `El numero ${numero} en binario es ${decimal} en decimal`
    );
  }

  if (base === 10) {
    return console.log(
      `${numero} base ${base} = ${numero.toString(2)} en base 2`
    );
  }

  // let restos = [],
  //   resto;
  // if (base === 10) {
  //   while (parseInt(numero / 2) >= 1) {
  //     numero = numero / 2;
  //     resto = numero % 2;
  //     restos.push(parseInt(resto));
  //   }

  //   restos.reverse();
  //   restos.push(parseInt(numero));
  //   return restos;
  // }
};

binarioDecimal(100, 2);
binarioDecimal(25, 10);
binarioDecimal(4, 10);

//solucion del Video
const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
  if (numero === undefined)
    return console.warn(`No ingresaste el numero a Convertir`);

  if (typeof numero != "number")
    return console.error(`El valor ${numero} ingresado No es un Numero`);

  if (base === undefined)
    return console.warn("No ingresaste la base a convertir");

  if (typeof numero != "number")
    return console.error(`El valor ${base} ingresado No es un Numero`);

  if (base === 2) {
    return console.info(
      `${numero} base ${base} = ${parseInt(numero, base)} en base 10`
    );
  } else if (base === 10) {
    return console.info(
      `${numero} base ${base} = ${numero.toString(base)} en base 2`
    );
  } else {
    return console.error("El tipo de base a convertir NO es Valido");
  }
};

convertirBinarioDecimal();
convertirBinarioDecimal("2");
convertirBinarioDecimal(100);
convertirBinarioDecimal(100, "2");
convertirBinarioDecimal(100, 2);
convertirBinarioDecimal(1110011, 2);
convertirBinarioDecimal(4, 10);
convertirBinarioDecimal(114, 10);
convertirBinarioDecimal(114, 3);

// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada,
// pe. miFuncion(1000, 20) devolverá 800.
const descuento = (monto = undefined, descuento = 0) => {
  if (monto === undefined) return console.log("Debe ingresar el monto");

  if (descuento > 100)
    return console.log("El valor del descuento no puede ser mayor a 100");

  if (typeof monto !== "number" || typeof descuento !== "number")
    return console.log("Debe ingresar un valor numerico");

  descuento = descuento / 100;

  let totalPagar, totalDescuento;

  totalDescuento = monto * descuento;
  totalPagar = monto - totalDescuento;
  console.log(
    `El monto total a pagar es de ${totalPagar}, su descuento fue de ${totalDescuento}`
  );
};

descuento(1000, 20);
descuento(10000, 30);
descuento(125000, 25);

//solucion del video
const aplicarDescuento = (monto = undefined, descuento = 0) => {
  if (monto === undefined) return console.warn("No ingresaste el Monto");

  if (typeof monto !== "number")
    return console.error(`El valor ${monto} ingresado No esun numero`);

  if (monto === 0) return console.error("El monto no puede ser 0");

  if (Math.sign(monto) === -1)
    return console.error(`El monto no puede ser Negativo`);

  if (typeof descuento !== "number")
    return console.error(`El valor ${descuento} ingresado No esun numero`);

  if (Math.sign(descuento) === -1)
    return console.error(`El descuento no puede ser Negativo`);

  return console.info(
    `$${monto} - ${descuento}% = $${monto - (monto * descuento) / 100}`
  );
};

aplicarDescuento(1000, 25);

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy,
// pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const aniosTranscurridos = (fecha) => {
  if (!fecha) return console.log("Debe Ingresar una fecha (Año,Mes,Dia)");

  if (typeof fecha !== "object")
    return console.log(
      'Debe ingresar una fecha en Formato "new Date(año,mes,dia)"'
    );

  let anio, mes, dia, anioActual, mesActual, diaActual;

  anio = fecha.getFullYear();
  mes = fecha.getMonth();
  dia = fecha.getDate();

  let hoy = new Date();
  anioActual = hoy.getFullYear();
  mesActualo = hoy.getMonth();
  diaActual = hoy.getDate();

  let cantidadAnio;

  if (mesActual === mes) {
    if (diaActual > dia) {
      cantidadAnio = anioActual - anio;
    } else {
      cantidadAnio = anioActual - anio;
    }
  } else if (mesActual > mes) {
    cantidadAnio = anioActual - anio;
  } else {
    cantidadAnio = anioActual - anio;
  }

  return console.log(`Han Pasado ${cantidadAnio} Años`);
};

aniosTranscurridos(new Date(1984, 4, 23));
aniosTranscurridos(new Date(1989, 9, 7));
aniosTranscurridos();

//solucion del video
const calcularAnios = (fecha = undefined) => {
  if (fecha === undefined) return console.warn("No ingresaste la fecha");

  if (!(fecha instanceof Date))
    return console.error("El valor que ingresaste no es un fecha valida");

  let hoyMenosFecha = new Date().getTime() - fecha.getTime(), //en formato timestamp
    aniosEnMs = 1000 * 60 * 60 * 24 * 365,
    aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMs);

  return Math.sign(aniosHumanos) === -1
    ? console.info(
        `Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`
      )
    : Math.sign(aniosHumanos) === 1
    ? console.info(
        `Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}`
      )
    : console.info(`Estamos en el Año ${fecha.getFullYear()} `);
};

calcularAnios();
calcularAnios({});
calcularAnios(false);
calcularAnios(new Date());
calcularAnios(new Date(1984, 4, 23));
calcularAnios(new Date(1989, 10, 7));
calcularAnios(new Date(2084, 4, 23));
calcularAnios(new Date(1884, 4, 23));
