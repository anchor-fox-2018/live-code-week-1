function oneRowKeys() {
    const KEYBOARD = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
    ]
    let input = ['ROTI'];
    let baris1 = 0;
    let baris2 = 0;
    let baris3 = 0;
    let G = KEYBOARD.indexOf('Q');
    // check masing2 element dari input dan keyboard
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            console.log(input[i][j]);
            for (let k = 0; k < KEYBOARD.length; k++) {
                for (let l = 0; l < KEYBOARD[k].length; l++) {
                    console.log(`${input[i][j]} ${KEYBOARD[k][l]}`)
                    if (input[i][j]===KEYBOARD[k][l]) {
                        
                    }
                }
            }
        }
    }

}
oneRowKeys();
//console.log(oneRowKeys(['Roti', 'Gelas', 'Perut', 'Potong']));