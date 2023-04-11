// const string = "Esto es una cadena de texto";
// const number = 56;
// const bool = false;

// const array = ["hola", "mundo"];
// console.log(array[0]);

const object = {
  name: "Adrian",
  lastName: "Gordo",
  // method: function (a) {
  //   console.log("Desde dentro del objeto");
  // },
};
console.log(object);

// array[0] = "adios";
// console.log(array);

// object.name = "Hola";
// console.log(object);

// function myFunc(text) {
//   console.log(text);
// }

// myFunc("Que pasa tio");

// function suma(num1, num2) {
//   console.log(num1 + num2);
// }

// suma(3, 4);

// function resta(num1, num2) {
//   console.log(num1 - num2);
// }

// resta(34, 22);

// function mult(num1, num2) {
//   const mult = num1 * num2;
//   return mult;
// }

// const result = mult(2, 2);
// console.log(result);

// const arrowFunction = (num1, num2) => {
//     return num1 * num2
//   }
  
//   const res = arrowFunction(6 , 8)

// function reassignFirst(array, nuevapalabra) {
//   array[0] = nuevapalabra;
//   return array;
// }

// const arr = ["adios", "loco"];

// reassignFirst(arr, "hola");
// console.log(arr);



// const products = [
//   {
//     name: "Zapatillas",
//     price: 80,
//   },
//   {
//     name: "Sudadera",
//     price: 60,
//   },
// ];

// // i++ = i + 1

// // Usando for

// let totalPrice = 0;

// for (let i = 0; i < products.length; i++) {
//   console.log("Numero de ciclo: ", i);
//   const currentPrice = products[i].price;
//   console.log(currentPrice);
//   totalPrice = totalPrice + currentPrice;
// }

// console.log("Total price is: ", totalPrice);

// // Usando metodos de array
// const totalPrice2 = products.reduce((prev, curr) => {
//   return prev + curr.price
// }, 0)

// console.log(totalPrice2)

// // Control de flujo

// function flow() {
//   const number = 85*96;
//   const bigNumber = 652145 * 84531861;
//   const bool = true
//   if (!(bigNumber > number)) {
//     console.log("Condición true")
//   } else {
//     console.log("Condicion false")
//   }
// }

// flow()

// // Funciones recursivas

// // function iter(num) {
// //   const plusOne = num + 1
// //   console.log(plusOne)
// //   if (plusOne > 1000) {
// //     return;
// //   } else {
// //     iter(plusOne)
// //   }
// // }

// // iter(1)

// // Función para calcular sumatorio simple entre dos valores
// // sumatorio(1, 9) -> Suma de todos los numeros entre 1 y 9 (incluidos)


// function sumatorio (a){
//     let numerosumado = 0;
//     for (let x = 0; x <= a; x++) {
//         numerosumado = numerosumado + x;
        
//     }
//     console.log (numerosumado);
// }
// sumatorio (1);

// // Función para calcular el factorial de un numero
// // factorial(5) -> Multiplicar todos los numeros del 1 al 9

// function factorial (a){
//     let numerofinal = 1;
//     for (let x = 1; x <= a ; x++) {
//         numerofinal = numerofinal * x ;
//     }
//     console.log(numerofinal)
// }
// factorial (20)

// function denominadores (num) {
//     let denominador = 0;
//     const denom = [];
//     // let y = 0;
//     for (let x = 0; x < num; x++) {
//         denominador = num/x;
//         if (Number.isInteger (denominador)) {  
//             // denom[y] = denominador;         
//             // console.log(denominador);
//             denom.push(denominador);
//             // y++;
//         }   
//     }
//     return denom;
// }

// console.log(denominadores(70))

// function comundenominadores(num1, num2){
//     let denomnum1 = denominadores(num1);
//     let denomnum2 = denominadores(num2);
//     // console.log (denomnum1);
//     // console.log (denomnum2);
//     let comunes = [];
//     // let z = 0;
// for (let y = 0; y < denomnum2.length; y++) {

//  for (let x = 0; x < denomnum1.length; x++) {
//     if (denomnum1[x]=== denomnum2[y]) {
//         // console.log(denomnum1);
//         // comunes[z] = denomnum1 [x];
//         comunes.push(denomnum1 [x]);
//         // z++;
//     }
// }
//  } return comunes;
// }

// console.log(comundenominadores(1576, 3708));

// function numeroprimo(num){
//     let primo = denominadores(num);
//     if (1 === primo.length) {
//         console.log("Hola primo");
//     } else {
//         console.log("A ti te puedo fornicar");
//     }
// }
// numeroprimo(1579)

function prueba(num, num2){
  let numeros = [1, 2, 3, 4, 5];
  let copynumeros = numeros.slice();
  let ultnum = numeros.pop();
  let pos =numeros.indexOf(3);
  let prinum = numeros.shift();
  let text = "es una string";
  let stolennumber = numeros.splice(1, 3, "me he colado");
  let varios = numeros.concat(copynumeros, stolennumber, ultnum, pos, prinum);
  

  
  
  // Saca el 5 retornandolo
  numeros.unshift (num2);
  numeros.push (num);
  console.log(numeros);
  console.log(ultnum);
  console.log(prinum);
  console.log(pos);
  
  console.log(numeros);
  console.log(stolennumber);
  console.log(copynumeros);
  console.log(varios);
  let variosreves = varios.reverse();
  console.log(variosreves);
  


  if (Array.isArray(copynumeros)) {
    console.log("Es un array");
    
  }
   else {
    console.log("No es un array");
  }
  ;
}
prueba(65, 55);

function doblar(num1, num2, num3, num4) {
  let numeros = [num1, num2, num3, num4]
  let dobles = numeros.map(function (x) {
    return x*2;
  })
  return dobles;
}

console.log(doblar(10, 25, 30, 90))


// function mayus(frase) {
//   let fraseor = frase;
//   let frasesub = fraseor.map(function (char){
//     frasesub.push(char);
//     console.log(frasesub);
//     // return char;
//   })
// }
// mayus("hola loco")
