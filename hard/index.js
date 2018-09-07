function oneRowKeys(arr) {
  let result = [];
  let keyboard = {
    'q':1, 'w':1, 'e':1, 'r':1, 't':1, 'y':1, 'u':1, 'i':1, 'o':1, 'p':1,
    'a':2, 's':2, 'd':2, 'f':2, 'g':2, 'h':2, 'j':2, 'k':2, 'l':2,
    'z':3, 'x':3, 'c':3, 'v':3, 'b':3, 'n':3, 'm':3
  }

  for (var i = 0; i < arr.length; i++) {
    let row = 0;
    for (var j = 0; j < arr[i].length; j++) {
      let word = arr[i][j].toLowerCase();

      if (j === 0) {
        row = keyboard[word];
      } else if (keyboard[word] !== row) {
        break;
      }
    }
    if (j === arr[i].length) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(oneRowKeys(['Roti', 'Gelas', 'Perut', 'Potong']));
// [ 'Roti', 'Perut' ]

console.log(oneRowKeys(['Kakak', 'Adik', 'Bunda']));
// []

console.log(oneRowKeys(['Kopi', 'Topi']));
// [ 'Topi' ]
