//RELEASE 0
function generateCardInHand() {
  // put your code here
  let front = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'K', 'Q', 'A'];
  let back = ['K', 'H' ,'W', 'S'];
  let result = [];

  for (let i = 0; i < 5; i++) {
    let tempResult = '';
    tempResult += front[Math.floor(Math.random() * front.length)].toString();
    tempResult += back[Math.floor(Math.random() * back.length)];
    result.push(tempResult);
  }
  console.log(result);
}

console.log('RELEASE 0' + `\n`)
generateCardInHand()
console.log('---------------------------------' + `\n`)


//RELEASE 1
function generateCardInHandPair() {
  // put your code here
  let front = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'K', 'Q', 'A'];
  let back = ['K', 'H', 'W', 'S'];
  let result = [];
  let pairNum = '';


  for (let i = 0; i < 5; i++) {
    let tempResult = '';
    let frontRandom = '';

    //angka depan yang random
    if (i % 2 === 0) {
      pairNum = front[Math.floor(Math.random() * front.length)].toString();
      frontRandom = pairNum;
    }

    else {
      frontRandom = pairNum;
    }
    

    //adding tempResult
    tempResult += frontRandom;
    tempResult += back[Math.floor(Math.random() * back.length)].toString();

    // pushing
    result.push(tempResult);
  }
  console.log(result);
}

console.log('RELEASE 1' + `\n`)
generateCardInHandPair()
console.log('---------------------------------' + `\n`)