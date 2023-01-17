// let arr = [5, 7, 8];
// let newArr = [...arr, 3];
// arr[0] = 6;
// arr[1] = 12;
// arr[2] = 20;

// console.log(arr);
// console.log(newArr);

let user = {
    name : "rohit",
    age : 25
}

let city = "mumbai";
let newUser = {...user, city};

user.name = "amar";

console.log(user)
console.log(newUser)
