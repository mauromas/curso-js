function aplicarDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

function calcPrecioFinal() {
  const Precio = document.getElementById("ingresoPrecio");
  const valuePrecio = Precio.value;

  const Descuento = document.getElementById("ingresoDescuento");
  const valueDescuento = Descuento.value;

  const resultadoFinal = aplicarDescuento(valuePrecio, valueDescuento);

  const imprimirResultado = document.getElementById("resultadoFinal");
  imprimirResultado.innerText = "Tu precio final es de " + resultadoFinal;
}
