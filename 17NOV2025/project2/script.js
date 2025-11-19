let main = document.querySelector("main");
let btn = document.querySelector("button");

let arr = [
  "ReactJs",
  "MongoDb",
  "Nodejs",
  "NextJS",
  "BunJS",
  "AngularJS",
  "JavaScript Jhindabad",
];

btn.addEventListener("click", () => {
  let h1 = document.createElement("h1");

  let a = Math.floor(Math.random() * arr.length);

  let x = Math.floor(Math.random() * 100);
  let y = Math.floor(Math.random() * 100);
  let rot = Math.floor(Math.random() * 100);

  let c1 = Math.floor(Math.random()*256);
  let c2 = Math.floor(Math.random()*256);
  let c3 = Math.floor(Math.random()*256);

  h1.innerHTML = arr[a];

  h1.style.position = "absolute";
  h1.style.top = x + "%";
  h1.style.left = y + "%";
  h1.style.rotate = rot + "deg";



  main.appendChild(h1);

  h1.addEventListener("mouseover", ()=>{
    h1.style.scale = `1.4`;
    h1.style.color =  `rgb(${c1}, ${c2}, ${c3})`;
  })
  h1.addEventListener("mouseout", ()=>{
    h1.style.scale = `1.0`;
  })
});
