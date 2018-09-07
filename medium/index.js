function snakeLadderSorting(arr) {

  let all = arr.join(',').split(',');
  let size = arr.length;
  let sizeInside = Math.round(all.length / size)
  let result = []
  let sorted = all.sort(function(a, b) {return a-b});
  let count = 0;
    for (var i = 0; i < size; i++) {
      result.splice(0,0,[]);
      for (var j= 0; j < sizeInside; j++) {
        if (i % 2 === 0) {
          result[0].push(sorted[count]);
        } else {
          result[0].splice(0,0,sorted[count]);
        }
      count++;
      }
    }
    return result;
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
