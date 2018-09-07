//count function
String.prototype.count = function (s1) {
    return (this.length - this.replace(new RegExp(s1, "g"), '').length) / s1.length;
}

function oneRowKeys (input) {
    
    let result = [];

    //all input
    for (let i = 0; i < input.length; i++) {
        let keyboard = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];
        
        for (let n = 0; n < keyboard.length; n++) {
        //input[0]
        let foundWord = '';
            for (let c = 0; c < input[i].length; c++) {
                    if (keyboard[n].indexOf(input[i][c].toUpperCase()) !== -1) {
                        foundWord += input[i][c];
                    }
            }
            if (foundWord.length === input[i].length) {
                let isDuplicate = false;
                for (let w = 0; w < input[i].length; w++) {
                    if (input[i].count(input[i][w]) > 1) {
                        isDuplicate = true;
                        break;
                    }
                }

                if (isDuplicate === false) {
                    result.push(input[i]);
                }
            }
        }
    }
    return result;
}

//test
console.log(oneRowKeys(['Roti', 'Gelas', 'Perut', 'Potong']));
// [ 'Roti', 'Perut' ]

console.log(oneRowKeys(['Kakak', 'Adik', 'Bunda']));
// []

console.log(oneRowKeys(['Kopi', 'Topi']));
// [ 'Topi' ]

console.log(oneRowKeys(['bnm', 'bnmm', 'ghj']));
// [ 'Topi' ]