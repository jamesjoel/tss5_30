let user = {
    name : "rohit",
    age : 25
}

let obj = {...user};

user.name = "amar";

console.log(user);
console.log(obj);