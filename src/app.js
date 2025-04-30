import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  const who = ['You mama', 'My dinosaur', 'The president', 'My brain'];
  const action = ['ate', 'peed', 'crushed', 'broke'];
  const what = ['my a**', 'my d***', 'my pc'];
  const when = ['before the class', 'when I was sleeping', 'while I was in the bathroom', 'during my lunch', 'while I was praying'];

  let excusa = document.getElementById("excuse");

  excusa.innerHTML = who[Math.floor(Math.random() * who.length)] + " " + action[Math.floor(Math.random() * action.length)] + " " + what[Math.floor(Math.random() * what.length)] + " " + when[Math.floor(Math.random() * when.length)];



  //write your code here
  console.log("Hello Rigo from the console!");
};

function generarExcusa() {
  const who = ['You mama', 'My dinosaur', 'The president', 'My brain'];
  const action = ['ate', 'peed', 'crushed', 'broke'];
  const what = ['my a**', 'my d***', 'my pc'];
  const when = ['before the class', 'when I was sleeping', 'while I was in the bathroom', 'during my lunch', 'while I was praying'];
  
  let excusa = document.getElementById("excuse");
  return excusa.innerHTML = who[Math.floor(Math.random() * who.length)] + " " + action[Math.floor(Math.random() * action.length)] + " " + what[Math.floor(Math.random() * what.length)] + " " + when[Math.floor(Math.random() * when.length)];
}

document.getElementById("boton").onclick=generarExcusa;