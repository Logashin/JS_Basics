console.log("you are at "+window.location);

const Colordiv = document.querySelector(".colordiv");
//Colordiv.style.backgroundColor = "blue";
let q = prompt("Какой хочешь цвет ?");
Colordiv.style["background-color"] = q;