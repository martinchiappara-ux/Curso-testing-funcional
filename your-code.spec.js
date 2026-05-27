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

// Casos adicionales
describe("calcularPrecioFinal - casos adicionales", function () {

  it("debería lanzar error si el descuento es negativo", function () {
    expect(function () {
      calcularPrecioFinal(100, -5);
    }).toThrowError("Descuento inválido");
  });

  it("precio 0 devuelve 0 independientemente del descuento", function () {
    let resultado = calcularPrecioFinal(0, 50);

    expect(resultado).toBe(0);
  });

  it("debería manejar descuentos decimales correctamente", function () {
    let resultado = calcularPrecioFinal(200, 12.5);

    expect(resultado).toBeCloseTo(175, 5);
  });

  it("debería funcionar con precios grandes", function () {
    let resultado = calcularPrecioFinal(1000000, 10);

    expect(resultado).toBe(900000);
  });

});

describe("sumar - casos adicionales", function () {

  it("debería sumar números negativos y positivos", function () {
    expect(sumar(-2, 1)).toBe(-1);
  });

  it("0 + 0 debería ser 0", function () {
    expect(sumar(0, 0)).toBe(0);
  });

  it("debería sumar números decimales (uso toBeCloseTo)", function () {
    expect(sumar(2.3, 3.4)).toBeCloseTo(5.7, 5);
  });

});

describe("validatePassword", function () {

  it("debería aceptar una contraseña válida", function () {
    const resultado = validatePassword("Abcde1!f");

    expect(resultado.valid).toBe(true);
    expect(resultado.errors.length).toBe(0);
  });

  it("debería rechazar una contraseña que no es string", function () {
    const resultado = validatePassword(12345678);

    expect(resultado.valid).toBe(false);
    expect(resultado.errors).toContain("Password must be a string");
  });

  it("debería rechazar contraseñas con menos de 8 caracteres", function () {
    const resultado = validatePassword("Ab1!x");

    expect(resultado.valid).toBe(false);
    expect(resultado.errors).toContain("Minimum 8 characters");
  });

  it("debería rechazar contraseñas sin mayúscula", function () {
    const resultado = validatePassword("abcde1!fg");

    expect(resultado.valid).toBe(false);
    expect(resultado.errors).toContain("At least one uppercase letter");
  });

  it("debería rechazar contraseñas sin minúscula", function () {
    const resultado = validatePassword("ABCDE1!FG");

    expect(resultado.valid).toBe(false);
    expect(resultado.errors).toContain("At least one lowercase letter");
  });

  it("debería rechazar contraseñas sin número", function () {
    const resultado = validatePassword("Abcde!fgh");

    expect(resultado.valid).toBe(false);
    expect(resultado.errors).toContain("At least one number");
  });

  it("debería rechazar contraseñas sin carácter especial", function () {
    const resultado = validatePassword("Abcde12fg");

    expect(resultado.valid).toBe(false);
    expect(resultado.errors).toContain("At least one special character");
  });

  it("debería rechazar contraseñas con espacios", function () {
    const resultado = validatePassword("Abcde1! f");

    expect(resultado.valid).toBe(false);
    expect(resultado.errors).toContain("No spaces allowed");
  });

  it("debería devolver múltiples errores para una contraseña inválida", function () {
    const resultado = validatePassword("abc 123");

    expect(resultado.valid).toBe(false);
    expect(resultado.errors).toContain("Minimum 8 characters");
    expect(resultado.errors).toContain("At least one uppercase letter");
    expect(resultado.errors).toContain("At least one special character");
    expect(resultado.errors).toContain("No spaces allowed");
  });

});