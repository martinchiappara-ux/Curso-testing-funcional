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
}function validatePassword(password) {
  if (typeof password !== "string") {
    return {
      valid: false,
      errors: ["Password must be a string"]
    };
  }

  const errors = [];

  if (password.length < 8) {
    errors.push("Minimum 8 characters");
  }

  if (!/[A-Z]/.test(password)) {
    errors.push("At least one uppercase letter");
  }

  if (!/[a-z]/.test(password)) {
    errors.push("At least one lowercase letter");
  }

  if (!/[0-9]/.test(password)) {
    errors.push("At least one number");
  }

  if (!/[!@#$%^&*]/.test(password)) {
    errors.push("At least one special character");
  }

  if (/\s/.test(password)) {
    errors.push("No spaces allowed");
  }

  return {
    valid: errors.length === 0,
    errors
  };
}