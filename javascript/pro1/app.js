var x = require("reverse-string");
var y = require("random-string");
var z = require("reverse-array");
var a = "The Stepping Stone";



var b = x(a);

var c = y({ length : 10 });


var arr = ["red", "green", "blue", "yellow", "pink", "black"];
var arr2 = z(arr);
console.log(arr2);
