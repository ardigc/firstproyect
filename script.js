const string = "Esto es una cadena de texto";
const number = 56;
const bool = false;

const array = ["hola", "mundo"];
console.log(array[0]);

const object = {
  name: "Adrian",
  lastName: "Gordo",
  method: function (a) {
    console.log("Desde dentro del objeto");
  },
};
console.log(object["name"]);

array[0] = "adios";
console.log(array);

object.name = "Hola";
console.log(object);

function myFunc(text) {
  console.log(text);
}

myFunc("Que pasa tio");

function suma(num1, num2) {
  console.log(num1 + num2);
}

suma(3, 4);

function resta(num1, num2) {
  console.log(num1 - num2);
}

resta(34, 22);

function mult(num1, num2) {
  const mult = num1 * num2;
  return mult;
}

const result = mult(2, 2);
console.log(result);

const arrowFunction = (num1, num2) => {
    return num1 * num2
  }
  
  const res = arrowFunction(6 , 8)

function reassignFirst(array, nuevapalabra) {
  array[0] = nuevapalabra;
  return array;
}

const arr = ["adios", "loco"];

reassignFirst(arr, "hola");
console.log(arr);



const products = [
  {
    name: "Zapatillas",
    price: 80,
  },
  {
    name: "Sudadera",
    price: 60,
  },
];

// i++ = i + 1

// Usando for

let totalPrice = 0;

for (let i = 0; i < products.length; i++) {
  console.log("Numero de ciclo: ", i);
  const currentPrice = products[i].price;
  console.log(currentPrice);
  totalPrice = totalPrice + currentPrice;
}

console.log("Total price is: ", totalPrice);

// Usando metodos de array
const totalPrice2 = products.reduce((prev, curr) => {
  return prev + curr.price
}, 0)

console.log(totalPrice2)

// Control de flujo

function flow() {
  const number = 85*96;
  const bigNumber = 652145 * 84531861;
  const bool = true
  if (!(bigNumber > number)) {
    console.log("Condición true")
  } else {
    console.log("Condicion false")
  }
}

flow()

// Funciones recursivas

function iter(num) {
  const plusOne = num + 1
  console.log(plusOne)
  if (plusOne > 1000) {
    return;
  } else {
    iter(plusOne)
  }
}

iter(1)

// Función para calcular sumatorio simple entre dos valores
// sumatorio(1, 9) -> Suma de todos los numeros entre 1 y 9 (incluidos)










// Función para calcular el factorial de un numero
// factorial(5) -> Multiplicar todos los numeros del 1 al 9