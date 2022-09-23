var myFun = (a, b, c) =>{

    // var a = 10;
    // var b = 5;
    // var c = 2;
    var d = a*b;
    var e = d/c;
    return e;
}

var a =myFun(50, 10, 5);
var b = myFun(200, 50, 10);
var c = myFun(10, 200, 50);
console.log(a, b, c);
