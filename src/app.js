import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
 document.querySelector("#newCard").addEventListener("click", randomCardGenerator )
 
}

const randomCardGenerator = () => {

 

  let suits = ["♥", "♦", "♠", "♣"]
  let cardNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
   

  document.querySelector("#top-suit").innerHTML = suits[Math.floor(Math.random() * suits.length)];
  document.querySelector("#card-number").innerHTML = cardNumbers[Math.floor(Math.random() * cardNumbers.length)];
  document.querySelector("#bottom-suit").innerHTML = suits[Math.floor(Math.random() * suits.length)];
  
  
 
 

}