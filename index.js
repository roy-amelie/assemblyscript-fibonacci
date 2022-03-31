import { listFibonacci } from "./build/release.js";

let generate = document.querySelector("#generate");

generate.addEventListener("click", (e) => {
  let num = document.querySelector("#number").value;
  let result = listFibonacci(num);
  let display_result = document.querySelector("#result");
  result.forEach((element) => {
    console.log(element);
    let div = document.createElement("div");
    div.className = "display";
    div.innerHTML = element;
    display_result.appendChild(div);
  });
});
