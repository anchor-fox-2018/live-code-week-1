"use strict";
function diceRoll(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateCardInHand() {
  // put your code here
  let cardInHand = ['5K', 'JK', '2H', '3W', 'AK']
  let cardInHand2 = ['10S', '10K', 'JH', 'JS', '2K']
  const CARDSYMBOL = "KHWS";
  const CARDNUMBER = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  let cardResult = [];
  for (let i = 0; i < 5; i++) {
    let res = "";
    res = res + CARDSYMBOL[diceRoll(0, 3)];
    res = res + CARDNUMBER[diceRoll(0, 12)];
    cardResult.push(res);
  }
console.log(cardResult);
}
generateCardInHand();
