function generateCardInHand() {
  let limaKartu = []
  for (var i = 0; i < 5; i++) {
   limaKartu.push(random())
  }
  while (limaKartu[1][0] !== limaKartu[0][0]) {
    limaKartu.splice(1, 1, random())
  }
  while (limaKartu[3][0] !== limaKartu[2][0]) {
    limaKartu.splice(3, 1, random())
  }
  console.log(limaKartu);
}

function random() {
  let randomNum = Math.round(Math.random() * 12) + 1;
  let num = randomNum;

  if (randomNum === 11) {
    num = 'J'
  } else if (randomNum === 12) {
    num = 'Q'
  } else if (randomNum === 13) {
    num = 'K'
  } else if (randomNum === 1) {
    num = 'A'
  }

  let randomField = Math.round(Math.random() * 3) + 1;
  let field = randomField;

  if (randomField === 1) {
    field = 'H'
  } else if (randomField === 2) {
    field = 'K'
  }else if (randomField === 3) {
    field = 'W'
  }else if (randomField === 4) {
    field = 'S'
  }
  return `${num}${field}`;
}

generateCardInHand() // [ '5K', 'JK', '2H', '3W', 'AK']
generateCardInHand() // [ '5K', 'QK', 'AH', '4W', 'KK']
