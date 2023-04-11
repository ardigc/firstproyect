// Repaso arrow function

// Funcion normal
function normalFunction(number, text) {
  // Code here
  number + 8;
  text;
}

// Arrow
const arrowFunction = (number, text) => {
  // Code here
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Map

const newArray = array.map((num, index, p) => {
  return num % 2;
});

// console.log(newArray)

// Filter

const filtered = array.filter((num, index, p) => {
  return !(num % 2);
});

// console.log(filtered);

// Some

const value = array.some((value) => {
  if (value > 9) return true;
})

// console.log(value)

// Every

const all = array.every(value => value <= 9)

// console.log(all)

// Slice

const slice = array.slice(1, -1)

// console.log(slice)

// Sort

const sorted = array.sort((a, b) => {
  // console.log("a: ", a)
  // console.log("b: ", b)
  return -1;
})

// console.log(sorted)

// Reduce

const reduced = array.reduce((prev, curr) => {
  // console.log(prev)
  // console.log(curr)
  return prev * curr
})

// console.log(reduced)

const products = [
  {
    name: "Zapas",
    price: 80,
    qt: 2
  },
  {
    name: "Zapas",
    price: 65,
    qt: 4
  },
  {
    name: "Zapas",
    price: 80,
    qt: 1
  },
  {
    name: "Zapas",
    price: 520,
    qt: 6
  },
  {
    name: "Zapas",
    price: 250,
    qt: 2
  },
  {
    name: "Envio",
    price: 5,
    qt: 1
  }
]

const price = products.reduce((acum, actu) =>{
  return actu.price*actu.qt + acum
}, 0)

console.log(price)