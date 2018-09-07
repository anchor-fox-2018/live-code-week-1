function extractArray (arr){
    let tampung = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0 ; j < arr[i].length; j++){
            tampung.push(arr[i][j]);
        }
    }
    return tampung;
}

// console.log(sortDescending(extractArray([
//     [6,4,5,12],
//     [1,3,8,11],
//     [9,2,7,13]
//  ])));
function sortDescending(arr){
    for (let i = 0; i < arr.length; i++){
        for (let j = i+1; j < arr.length; j++){
            if(arr[i] < arr[j]){
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr;
}

function sortAscending(arr){
    for (let i = 0; i < arr.length; i++){
        for (let j = i+1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr;
}
// console.log(sortDescending([6,4,5,12]));
// console.log(sortAscending([6,4,5,12]));

function snakeLadderSorting(arr){
    let rowArr = arr.length;
    let colArr = arr[0].length;
    let size = rowArr * colArr; 
    let testArrExtract = extractArray(arr);
    let testArrSorted = sortDescending(testArrExtract);

    
    
    var extractedSortedAscendingArr = sortAscending(extractArray(arr));
    var output = [];
    for(let i = 0; i < rowArr; i++){
        let col = []
        for (let j = 0; j < colArr; j++){
            if(rowArr%2 == 1){
                if(j%2 == 0){
                    col.push(sortAscending(extractedSortedAscendingArr[size-1]));                    
                } else if(j%2 == 1){
                    col.push(extractedSortedAscendingArr[size-1]);
                }
            } else if(rowArr%2 == 0){
                if(j%2 == 1){
                    col.push(sortAscending(extractedSortedAscendingArr[size-1]));                    
                } else if(j%2 == 0){
                    col.push(extractedSortedAscendingArr[size-1]);
                }
            }
            size --
        }
        
        output.push(col);
    }
    return output;
    debugger;
}

// console.log(snakeLadderSorting([
//     [6,4,5,12],
//     [1,3,8,11],
//     [9,2,7,13]
// ]));

console.log(snakeLadderSorting([
    [11,65,88,12,66],
    [18,55,33,24,78],
    [44,58,35,76,19],
    [35,67,90,19,25],
    [97,46,37,17,29],
]));

