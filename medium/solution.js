//array swap
function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

//selection sort
function selectionSort(array) {
    for (var i = 0; i < array.length; i++) {
        var min = i;
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (i !== min) {
            swap(array, i, min);
        }
    }
    return array;
}

//snake ladder function
function snakeLadderSorting (input) {
    let col = input.length
    let row = input[0].length
    let unsorted = [];
    let result = [];
    
    for (let i = 0; i < col; i++) {
        for (let n = 0; n < row; n++) {
            unsorted.push(input[i][n]);
        }
    }

    let sorted = selectionSort(unsorted);

    //actual making board
    let counter = sorted.length - 1;
    for (let i = 0; i < col; i++) {
        let tempResult = [];

        if (i % 2 === 0) {
            counter -= (row - 1);
        }
        else {
            counter -= (row + 1);
        }

        for (let c = 0; c < row; c++) {
            if (i % 2 === 0) {
                tempResult.push(unsorted[counter]);
                counter ++;
            }
            else {
                tempResult.push(unsorted[counter]);
                counter --;
            }
        }
        result.push(tempResult);
    }
    return result;

}


//TEST CASE
4 * 3 
console.log(snakeLadderSorting([
    [6, 4, 5, 12],
    [1, 3, 8, 11],
    [9, 2, 7, 13]
]));
/* [ 
     [ 9, 11, 12, 13 ], 
     [ 8, 7, 6, 5 ], 
     [ 1, 2, 3, 4 ] 
   ] 
*/


// 5 * 5 
console.log(snakeLadderSorting([
    [11, 65, 88, 12, 66],
    [18, 55, 33, 24, 78],
    [44, 58, 35, 76, 19],
    [35, 67, 90, 19, 25],
    [97, 46, 37, 17, 29],
]));
/*
[ [ 76, 78, 88, 90, 97 ],
  [ 67, 66, 65, 58, 55 ],
  [ 35, 35, 37, 44, 46 ],
  [ 33, 29, 25, 24, 19 ],
  [ 11, 12, 17, 18, 19 ] ]
*/