var num1 = [5, 47, 12, 54, 86, 3, 9];
var num2 = [8, 12, 55, 3, 17, 10, 88, 100, 14, 54];
var ans = [];


num1.forEach((x)=>{
    num2.forEach((y)=>{
        if(x==y){
            ans.push(x);
        }
    })
})
console.log(ans);