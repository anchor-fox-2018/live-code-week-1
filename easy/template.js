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
  // check for pair
  let uniqueCount = [];
  let pairCount = {};
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < cardResult[i].length; j++) {
      uniqueCount.push(cardResult[i][j]);
    }
  }
  uniqueCount.forEach(function (i) { pairCount[i] = (pairCount[i] || 0) + 1; });
  //console.log(pairCount);
  var result = 0;
  for (var i in pairCount) {
    if (pairCount[i]>=2) {
      return cardResult;
    }
  }
  generateCardInHand();
}

console.log(generateCardInHand());
