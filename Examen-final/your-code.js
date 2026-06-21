// ============================================================
//  Módulo: carrito de compras
//  Funciones para gestionar productos en un carrito
// ============================================================

/**
 * Crea un nuevo carrito vacío.
 * @returns {{ items: Array, descuento: number }}
 */
function crearCarrito() {
  return { items: [], descuento: 0 };
}

/**
 * Agrega un producto al carrito.
 * Si el producto ya existe, incrementa la cantidad.
 *
 * @param {object} carrito
 * @param {{ id: number, nombre: string, precio: number, cantidad: number }} producto
 * @returns {object} carrito actualizado
 * @throws {Error} si precio o cantidad son negativos o cero
 */
function agregarProducto(carrito, producto) {
  if (!producto || typeof producto !== "object") {
    throw new Error("El producto debe ser un objeto válido");
  }
  if (producto.precio <= 0) {
    throw new Error("El precio debe ser mayor a cero");
  }
  if (producto.cantidad <= 0) {
    throw new Error("La cantidad debe ser mayor a cero");
  }

  const existente = carrito.items.find((p) => p.id === producto.id);
  if (existente) {
    existente.cantidad += producto.cantidad;
  } else {
    carrito.items.push({ ...producto });
  }
  return carrito;
}

/**
 * Elimina un producto del carrito por su id.
 * Si no existe, no lanza error.
 *
 * @param {object} carrito
 * @param {number} id
 * @returns {object} carrito actualizado
 */
function eliminarProducto(carrito, id) {
  carrito.items = carrito.items.filter((p) => p.id !== id);
  return carrito;
}

/**
 * Calcula el subtotal (sin descuento).
 * @param {object} carrito
 * @returns {number}
 */
function calcularSubtotal(carrito) {
  return carrito.items.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
}

/**
 * Aplica un porcentaje de descuento al carrito (0–100).
 * @param {object} carrito
 * @param {number} porcentaje
 * @returns {object} carrito actualizado
 * @throws {Error} si el porcentaje está fuera de rango
 */
function aplicarDescuento(carrito, porcentaje) {
  if (porcentaje < 0 || porcentaje > 100) {
    throw new Error("El descuento debe ser entre 0 y 100");
  }
  carrito.descuento = porcentaje;
  return carrito;
}

/**
 * Calcula el total final aplicando el descuento.
 * @param {object} carrito
 * @returns {number} total con descuento aplicado
 */
function calcularTotal(carrito) {
  const subtotal = calcularSubtotal(carrito);
  return subtotal * (1 - carrito.descuento / 100);
}

/**
 * Devuelve la cantidad de líneas (ítems distintos) en el carrito.
 * @param {object} carrito
 * @returns {number}
 */
function cantidadItems(carrito) {
  return carrito.items.length;
}

/**
 * Vacía completamente el carrito, manteniendo el descuento.
 * @param {object} carrito
 * @returns {object} carrito vaciado
 */
function vaciarCarrito(carrito) {
  carrito.items = [];
  return carrito;
}

/**
 * Busca un producto por nombre (case-insensitive).
 * @param {object} carrito
 * @param {string} nombre
 * @returns {object|undefined}
 */
function buscarProductoPorNombre(carrito, nombre) {
  return carrito.items.find(
    (p) => p.nombre.toLowerCase() === nombre.toLowerCase()
  );
}