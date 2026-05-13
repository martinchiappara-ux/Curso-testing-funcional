 function calcularPrecioFinal(precio, descuento) {
  if (precio < 0) {
    throw new Error("El precio no puede ser negativo");
  }

  if (descuento < 0 || descuento > 100) {
    throw new Error("Descuento inválido");
  }

  return precio - (precio * descuento / 100);
}

function sumar(a, b) {
  return a - b;
}