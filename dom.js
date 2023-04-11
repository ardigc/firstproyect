// alert("desde dom.js")

const btn = document.querySelector(".boton");

console.log(btn);

// if (Math.random() > 0.5) {
//   btn.setAttribute("class", "boton red");
// }

btn.addEventListener("click", (ev) => {
  console.log(ev.target)
  const logo = document.querySelector(".logo");
  if (logo.className.includes("hide")) {
    logo.setAttribute("class", "logo");
  } else {
    logo.setAttribute("class", "logo hide");
  }
});

if (btn && btn instanceof HTMLButtonElement) {
  btn.addEventListener("mouseenter", (ev) => {
    console.log(ev.offsetX)
    console.log(ev.offsetY)
  })
  btn.addEventListener("mouseleave", () => {})
}
