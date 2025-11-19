let btn = document.querySelector("button");
let main = document.querySelector("main");

btn.addEventListener("click", () => {
  let div = document.createElement("div");
  div.style.width = "50px";
  div.style.height = "50px";

  let x = Math.floor(Math.random() * 100);
  let y = Math.floor(Math.random() * 100);

  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);

  div.style.position = "absolute";
  div.style.top = y +'%'
  div.style.left = x +'%'
  div.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;

  main.appendChild(div);
});
