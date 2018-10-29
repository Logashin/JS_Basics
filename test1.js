let qMany = prompt("сколько у вас с собой есть денег");
let qAplle = prompt("сколько вы купили яблок"); 
let qBread = prompt("сколько вы купили батонов хлеба");
let pAplle = prompt("сколько стоит одно яблоко"); 
let pBeard = prompt("сколько стоит один батон хлеба");

qMany = parseInt(qMany);
qAplle = parseInt(qAplle);
qBread = parseInt(qBread);
pAplle = parseInt(pAplle);
pBeard = parseInt(pBeard);

let aplle = qAplle * pAplle;
let beard = qBread * pBeard;
let sum = aplle + beard;

qMany >= sum