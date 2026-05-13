describe("calcularPrecioFinal", function () {

  it("debería aplicar un descuento del 20%", function () {
    let resultado = calcularPrecioFinal(1000, 20);

    expect(resultado).toBe(800);
  });

  it("debería devolver el mismo precio si el descuento es 0", function () {
    let resultado = calcularPrecioFinal(500, 0);

    expect(resultado).toBe(500);
  });

  it("debería devolver 0 si el descuento es 100", function () {
    let resultado = calcularPrecioFinal(300, 100);

    expect(resultado).toBe(0);
  });

  it("debería lanzar error si el precio es negativo", function () {
    expect(function () {
      calcularPrecioFinal(-100, 10);
    }).toThrowError("El precio no puede ser negativo");
  });

  it("debería lanzar error si el descuento es mayor a 100", function () {
    expect(function () {
      calcularPrecioFinal(1000, 150);
    }).toThrowError("Descuento inválido");
  });

});

describe("sumar", function () {

  it("debería sumar dos números", function () {
    expect(sumar(2, 3)).toBe(5);
  });

});