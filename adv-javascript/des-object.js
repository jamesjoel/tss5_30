let user = {
    fname : "rohit",
    age : 25
}
/*
let a = user.name;
let b = user.age;
*/

let { fname : a, age : b } = user;

console.log(a);
console.log(b);