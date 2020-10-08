// Precio de Venta
// Somos la tienda en linea WeSellEverything.com y queremos vender nuestros productos en un marketplace virtual en USD con una ganancia del 10%.

// La siguientes son las reglas:

// Los productos son comprados desde Estados Unidos y enviados directamente al cliente final con los siguientes costos:

// Las primeras 4 libras $10
// Cada libra adicional $2

// Arancel 10% del costo del producto
// IVA del 19% si el producto cuesta mas de $200, para calcular el iva se suma el arancel.

// La comisiones en el marketplace sobre el precio de venta son por categoria, de tal modo que:

// 000 Otros: 0%
// 001 Mascotas: 10%
// 002 Electronicos: 5%
// 003 Instrumentos Musicales: 15%

// Por lo tanto el costo de nuestro producto es
// Arancel = Costo del Producto 10%
// IVA = (Costo del Producto + Costo de Envio + Arancel) 19%
// Costo total del producto puesto en Colombia =
// (Costo del Producto + Costo de Envio + Arancel + Iva)

// Con base en este costo y la categoría del producto necesitamos encontrar el precio de venta en dólares con el que nos quede una ganancia esperada del 10% sobre el costo neto del producto.

// Podemos asumir para el ejercicio que los pesos de los productos son numeros enteros mayores a uno(1).

// Tener en cuenta que para calcular correctamente nuestro precio de venta debemos convertir la comision que nos cobran a una tasa de interés vencido con la fórmula: ( (Comision)/(1-Comision))

// La entrada es un string de texto separado por coma: "Producto,CódigoCategoria,Costo,Peso"

// Y la salida es una cadena de texto separando con coma el nombre del producto y el precio de venta redondeado a 2 decimales.

// Ejemplos
// Entradas
// Cama de Perro,001,100.00,2.00
// Juguete de Gato,001,300.00,8.00
// Piano,003,100.00,2.00
// Guitarra,003,300.00,8.00
// Anillo,000,100.00,2.00
// Otro,000,300.00,8.00

// Salidas
// Cama de Perro,146.67
// Juguete de Gato,506.15
// Piano,155.29
// Guitarra,535.92
// Anillo,132.00
// Otro,455.53
