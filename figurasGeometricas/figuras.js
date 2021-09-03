// Cuadrado

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

// Triángulos

function perimetroTriangulo(ladoUno, ladoDos, base) {
  return ladoUno + ladoDos + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// Circulos

function diametro(radio) {
  return radio * 2;
}

// const PI = Math.PI;

function perimetroCirculo(radio) {
  const diametro = diametro(radio);
  return diametro * Math.PI;
}

function areaCirculo(radio) {
  return Math.floor(radio * radio * Math.PI);
}

//---CUADRADO---

function calcPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcAreaCuadradro() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

//----TRIANGULO----
function alturaTriangulo(ladoUno, ladoDos, base) {
  if (ladoUno === ladoDos && ladoUno != base) {
    return Math.sqrt(ladoUno ** 2 - base ** 2 / 4);
  } else {
    alert("No es un triangulo isoceles, debe tener lado 1 y lado 2 iguales");
  }
}

function calcAlturaTriangulo() {
  const ladoUno = document.getElementById("InputTrianguloLadoUno");
  const valueUno = ladoUno.value;

  const ladoDos = document.getElementById("InputTrianguloLadoDos");
  const valueDos = ladoDos.value;

  const base = document.getElementById("InputTrianguloBase");
  const valueBase = base.value;

  const altura = alturaTriangulo(valueUno, valueDos, valueBase);
}
