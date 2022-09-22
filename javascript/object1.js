var user = {
    name : "rohit",
    age : 25,
    city : "mumbai"
};

// console.log(user.name);
user.age = 30;
user.gender = "male";
delete user.city;
console.log(user.name);
console.log(user.age);
console.log(user.gender);