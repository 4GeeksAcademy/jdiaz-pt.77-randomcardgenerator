import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  document.querySelector("#newCard").addEventListener("click", randomCardGenerator);
  randomCardGenerator()

}

const randomCardGenerator = () => {


  let suits = [{label:"♥", color:"red"}, {label:"♦", color:"red"}, {label:"♠", color: "black"}, {label:"♣", color: "black"}]
  let cardNumbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]

  let randomSuit = suits[Math.floor(Math.random() * suits.length)]
  let randomNumber = cardNumbers[Math.floor(Math.random() * cardNumbers.length)]

  const suitColors = document.querySelectorAll(".suit")


  //document.querySelector("#top-suit").innerHTML = randomSuit.label;
  document.querySelector("#card-number").innerHTML = randomNumber;
  //document.querySelector("#bottom-suit").innerHTML = randomSuit.label;

console.log(suitColors)
  for (const suit of suitColors) {
    suit.innerHTML = randomSuit.label
    suit.style.color = randomSuit.color
   
  }



}