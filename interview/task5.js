// var arr = ["red", "green"];

// arr.splice(1, 0, "blue");
// console.log(arr);

var num = [1, 2, 3, 4, 6, 7, 8, 10];

var index = 0;
for(var i=1; i<=10; i++)
{
    if(i != num[index])
    {
        num.splice(index, 0, i);
    }
    index++;
}

console.log(num);