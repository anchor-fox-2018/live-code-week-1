let cards = ['K', 'H', 'W', 'S'];
let gambar = ['J', 'Q', 'K', 'A'];
let objCards = [];

for(let i = 0; i < cards.length; i++ ){
  let obj = {
    name: cards[i],
    number: []
  };
  for(let j = 2; j <= 10; j++){
    obj.number.push(j);
  }

  for(let j = 0; j < gambar.length; j++){
    obj.number.push(gambar[j]);
  }
  objCards.push(obj);
}
// console.log(objCards)
function kocokKartu(){
  let minCards = 0;
  let maxCards = objCards.length;
  let acakCards = Math.floor(Math.random() * (maxCards-minCards)) + minCards;
  let minNumber = 0;
  let maxNumber = 13;
  let acakNumber = Math.floor(Math.random() * (maxNumber-minNumber)) + minNumber;
  // let acakName = 0
  // console.log(acakNumber)
    return objCards[acakCards].number[acakNumber] + objCards[acakCards].name;
  
}

function generateCardInHand() {
  var kartu = [];

  for(let i = 0; i < 5; i++){
    kartu.push(kocokKartu());
  }
  return kartu;
}

console.log(generateCardInHand());
