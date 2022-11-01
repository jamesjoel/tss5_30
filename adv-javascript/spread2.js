/*
Data-Types 
    1. Premitive ----- Number(int, float), string, boolean
    2. Derived ---- Array, Object
*/
/*
let a = 5;
let b = a;
a = 10;
console.log(b);
*/

let arr = [4, 7, 9];
let [...arr2] = arr;
arr[0] = 0;
arr[1] = 0;
arr[2] = 0;


console.log(arr2);