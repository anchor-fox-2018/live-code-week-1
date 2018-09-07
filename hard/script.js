/*
# One Row Keys

> ⏰ Time Estimation: ~90 mins

## Release 0
![Keyboard Layout](https://jasmcole.files.wordpress.com/2017/06/qwerty-e1496586489808.png?w=1200)  
Keyboard QWERTY memiliki layout seperti gambar di atas.
- Baris pertama: `'QWERTYUIOP'`
- Baris kedua: `'ASDFGHJKL'`,
- Baris ketiga: `'ZXCVBNM'`

Buatlah sebuah function untuk mengetahui kata apa saja di dalam `Array` yang bisa diketik dengan menggunakan **hanya satu baris** dan **satu huruf hanya bisa dipakai sekali**.
*/
function oneRowKeys(arr){
    var barisPertama = 'QWERTYUIOP';
    var barisKedua= 'ASDFGHJKL';
    var barisKetiga= 'ZXCVBNM';
    let hasil = []
    for(let i = 0;i < arr.length;i++){
        let isi = [0,0,0]
        for(let j = 0;j < arr[i].length;j++){
            for(let k = 0;k < barisPertama.length;k++){
                if(arr[i][j] === barisPertama[k]){
                    isi[0]++
                }
            }
            for(let l = 0;l < barisKedua.length;l++){
                if(arr[i][j] === barisKedua[l]){
                    isi[1]++
                }
            }for(let m = 0;m < barisKetiga.length;m++){
                if(arr[i][j] === barisKetiga[m]){
                    isi[2]++
                }
            }
        }
        hasil.push(isi)
    }
    return hasil
}

console.log(oneRowKeys(['Roti', 'Gelas', 'Perut', 'Potong']));
// [ 'Roti', 'Perut' ]

console.log(oneRowKeys(['Kakak', 'Adik', 'Bunda']));
// []

console.log(oneRowKeys(['Kopi', 'Topi']));
// [ 'Topi' ]

