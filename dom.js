// alert("desde dom.js")

const btn = document.querySelector(".boton");

console.log(btn);

// if (Math.random() > 0.5) {
//   btn.setAttribute("class", "boton red");
// }

btn.addEventListener("click", (ev) => {
  console.log(ev.target);
  const logo = document.querySelector(".logo");
  if (logo.className.includes("hide")) {
    logo.setAttribute("class", "logo");
  } else {
    logo.setAttribute("class", "logo hide");
  }
});

if (btn && btn instanceof HTMLButtonElement) {
  btn.addEventListener("mouseenter", (ev) => {
    console.log(ev.offsetX);
    console.log(ev.offsetY);
  });
  btn.addEventListener("mouseleave", () => {});
}

btn.addEventListener("click", (ev) => {
  const sesion = document.querySelector(".sesion-box");
  if (sesion.className.includes("sesion-box-hidden")) {
    sesion.setAttribute("class", "sesion-box sesion-box-show");
  } else {
    sesion.setAttribute("class", "sesion-box sesion-box-hidden");
  }
});

btn.addEventListener("click", (ev) => {
  const oscuro = document.querySelector(".button-fondo");
  if (oscuro.className.includes("oscurecer")) {
    oscuro.setAttribute("class", "button-fondo");
  } else {
    oscuro.setAttribute("class", "button-fondo oscurecer");
  }
});

const mouse = document.querySelector(".pizarra");

// mouse.addEventListener("mousemove",(ev) =>{
//   const punt = document.querySelector(".puntito");
//   punt.style.top = ev.offsetY + "px";
//   punt.style.left = ev.offsetX + "px";
// console.log("x", ev.offsetX);
// console.log("y", ev.offsetY);
// })

// mouse.addEventListener("mousedown", (ev)=>{
//   const punt = document.querySelector(".puntito");
//   punt.setAttribute("class", "puntito puntito-on")  ;
// })
// mouse.addEventListener("mouseup", (ev)=>{
//   const punt = document.querySelector(".puntito");
//   punt.setAttribute("class", "puntito puntito-off")  ;
// })

mouse.addEventListener("mousedown", (ev) => {
  const box = document.querySelector(".cajita");
  let x = ev.offsetX;
  let y = ev.offsetY;
  box.style.top = y + "px";
  box.style.left = x + "px";

  console.log("x", x, "y", y);
  mouse.addEventListener("mousemove", prueba);
  //  (val) =>{
  // let x1 = val.offsetX;
  // let y1 = val.offsetY;
  // console.log("x1", x1, "y1 ", y1);
  // })
});
mouse.addEventListener("mouseup", (ev) => {
  const box = document.querySelector(".cajita");
  box.style.display = "none";
  mouse.removeEventListener("mousemove", prueba);
  // (val) =>{
  //   let x1 = val.offsetX;
  //   let y1 = val.offsetY;
  //   console.log("x1", x1, "y1 ", y1);
  // });
});
function prueba(val) {
  const box = document.querySelector(".cajita");
  let x1 = 700 - val.offsetX;
  let y1 = 700 - val.offsetY;
  box.style.bottom = y1 + "px";
  box.style.right = x1 + "px";
  box.style.display = "block";
  console.log("x1", x1, "y1 ", y1);
}

// Crear elementos
// const element = document.createElement('div');
// element.setAttribute('id', "creado-js")
// const body = document.body;
// body.appendChild(element)

// Función que acepte dos parametros: el elemento a crear (div, a, p...) y los estilos (width, height...)
// La función debe retornar el elemento

function createElement(tag, styles, content) {
  const element = document.createElement(tag);
  element.setAttribute("style", styles);
  element.append(content);
  return element;
}

const newEl = createElement(
  "div",
  "width: 100%; background-color: red;",
  "Creado con js y append"
);
// Cuidado con innerHTML
// newEl.append("Creado con js y append");
document.body.appendChild(newEl);

document.body.append(
  ...[
    createElement(
      "div",
      "width: 100%; background-color: blue;",
      "Elemento uno"
    ),
    createElement("div", "width: 100%; background-color: red;", "Elemento dos"),
    createElement(
      "div",
      "width: 100%; background-color: green;",
      "Elemento tres"
    ),
  ]
);
