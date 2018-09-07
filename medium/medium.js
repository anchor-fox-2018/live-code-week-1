function snakeLadderSorting(array) {
    // let array = [
    //     [11, 65, 88, 12, 66],
    //     [18, 55, 33, 24, 78],
    //     [44, 58, 35, 76, 19],
    //     [35, 67, 90, 19, 25],
    //     [97, 46, 37, 17, 29],
    // ];
    let temporary = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            temporary.push(array[i][j]);
        }
    }
    // before sort
    console.log(temporary);
    for (let i = 0; i < temporary.length; i++) {
        for (let j = 0; j < temporary.length - i - 1; j++) {
            if (temporary[j] > temporary[j + 1]) {
                let tmp = temporary[j + 1];
                temporary[j + 1] = temporary[j];
                temporary[j] = tmp;
            }
        }
    }
    //after sort
    console.log(temporary);
    let reverseTemporary = [];
    for (let i = temporary.length - 1; i >= 0; i--) {
        reverseTemporary.push(temporary[i])
    }
    console.log(reverseTemporary);
    let resRow = [];
    let rowNum = Math.sqrt(reverseTemporary.length);
    for (let i = 0, j = 0; i < rowNum; i++) {
        let resCol = [];
        let step = 0;
        // NGEBUG disini harusnya 
        for (k = 0; j < reverseTemporary.length - step; j++) {
                resCol.push(reverseTemporary[j]) 
                step++;   

        }
        //j = j+5;
        resRow.push(resCol);
    }
    console.log(resRow);

    console.log(array);
}

console.log(snakeLadderSorting([
    [11, 65, 88, 12, 66],
    [18, 55, 33, 24, 78],
    [44, 58, 35, 76, 19],
    [35, 67, 90, 19, 25],
    [97, 46, 37, 17, 29],
]));