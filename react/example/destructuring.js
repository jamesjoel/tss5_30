// Array
let calc = (a, b)=>{
    let sum = a+b;
    let sub = a-b;
    let div = a/b;
    let mul = a*b;

    return [sum, sub, div, mul];
}

let [...a] = calc(5, 7);
console.log(arr);

