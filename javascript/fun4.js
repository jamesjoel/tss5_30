var obj = {
    name : "aman",
    age : 25,
    city : "indore",
    cube : (a)=>{
        return a*a*a;
    },
    upper : (a)=>{
        return a.toUpperCase();
    }
};


var a = obj.city;
var b = obj.cube(4);
var c = obj.upper("rohit");
console.log(c);
