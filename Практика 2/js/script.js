console.log("you are at "+window.location);

const colorBG = document.querySelector("body");
//Colordiv.style.backgroundColor = "blue";
let qb = prompt("Какой будет фон у страницы?");
colorBG.style["background-color"] = qb;

const colortext = document.querySelector(".page");
let qp = prompt("Какой будет цвет текста на странице");
colortext.style["color"] = qp;

const youName = document.querySelector('.name');
let qn = prompt("Как зовут человека, который вас вдохновляет");
youName.innerHTML = qn;

let image1 = prompt("Введите адресc картинки");
const imageconst = document.querySelector('img');
imageconst.setAttribute('src', image1);

let ptext = prompt("Введите текст страницы");
const cptext = document.querySelector('.shortBio');
cptext.innerHTML = ptext;
cptext.className += " animated";