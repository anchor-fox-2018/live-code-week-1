/*
#Snake and Ladder Sorting

diberikan sebuah array multidimensi yang berisi angka acak. 

tugas kalian adalah mengurutkan angka tersebut sesuai dengan urutan seperti board snake and ladder.
urutkan secara ascending ( dari kecil ke besar )

 ukuran array multidimensi ini tak harus persegi ( panjang dan lebar tak mesti sama  )

### Rule 
  
1. tidak boleh memakai array function apapun kecuali **push**


## Release 

Berikut adalah testcase 

*/

// 4 * 3 
function snakeLadderSorting(arr){
    let isiArr = []
    for(let i = 0;i < arr.length;i++){
        for(let j = 0;j < arr[i].length;j++){
            isiArr.push(arr[i][j])
        }
    }
    for(var i =0;i< isiArr.length;i++){
        for(var j = i+1; j < isiArr.length;j++){
            if(isiArr[j] < isiArr[i]){
                var penampung = isiArr[i];
                isiArr[i] = isiArr[j];
                isiArr[j] = penampung;
            }
        }
    }
    let aturIsi = []
    let idx = isiArr.length-1;
    for(let i = 0;i < arr.length;i++){
        let isi = []
        if(i % 2 === 0){
            idx-= arr[i].length-1
            for(let j = 0;j < arr[i].length;j++){
                isi.push(isiArr[idx]);
                idx++
            }
            idx-= arr[i].length+1
        }else{
            for(let k = 0;k < arr[i].length;k++){
                isi.push(isiArr[idx]);
                idx--
            }
        }
        aturIsi.push(isi)
    }
    return aturIsi
}
console.log(snakeLadderSorting([
   [6,4,5,12],
   [1,3,8,11],
   [9,2,7,13]
]));
/* [ 
     [ 9, 11, 12, 13 ], 
     [ 8, 7, 6, 5 ], 
     [ 1, 2, 3, 4 ] 
   ] 
*/
// 5 * 5 
console.log(snakeLadderSorting([
    [11,65,88,12,66],
    [18,55,33,24,78],
    [44,58,35,76,19],
    [35,67,90,19,25],
    [97,46,37,17,29],
]));
/*
[ [ 76, 78, 88, 90, 97 ],
  [ 67, 66, 65, 58, 55 ],
  [ 35, 35, 37, 44, 46 ],
  [ 33, 29, 25, 24, 19 ],
  [ 11, 12, 17, 18, 19 ] ]

*/

