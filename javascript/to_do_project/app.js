let button = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

button.addEventListener("click",function (){
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);
    inp.value = "";
})
