// for(let x = 1; x <= 10; x++)
// {
//     let str = "";
//     for(let a = 1; a <= x; a++)
//     {
//         str += a;
//     }
//     console.log(str)
// }
/*
let ans="";
let a = 5;
for(let x = a; x>=1; x--)
{
    ans *= x;
}
console.log(ans);
*/
/*
let a = 47;
let check = true;
for(let x = 2; x < a; x++)
{
    if(a % x == 0)
    {
        check= false;
        break;
    }
}

if(check==true)
    console.log("YES")
else
    console.log("NO");
*/

let str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat minus ex quia eos unde vel nemo blanditiis excepturi molestias a assumenda, minima, reprehenderit maxime voluptates consequuntur ab labore abcdefcghattderddred harum in!";

let arr = str.split(" ");
let x = arr[0].length;
let y = arr[0];

for(let a = 1; a < arr.length; a++)
{
    if(x > arr[a].length)
    {
        x = arr[a].length;
        y = arr[a];
    }
}

// console.log(x);
// console.log(y);

/*
let a ="steippingigggn"; // [s, t, e, p, p]
let arr2 = a.split("");
for(let x = 0; x < arr2.length; x++)
{
    if(arr2[x] == "i")
    {
        arr2.splice(x, 1);
    }
}
let str2 = arr2.join("");
console.log(str2);
*/


// let data = [4, 7, 3, 6, 12, 14, 8];
// let x = data[0];
// for(let a = 1; a < data.length; a++)
// {
//     if(x < data[a])
//     {
//         x = data[a];
//     }
// }

// console.log(x);


let a = "abcdcba";
let arr3 = a.split("");

let b = "";
for(let y = arr3.length-1; y >= 0; y--)
{
    b += arr3[y];
}
if(a == b)
{
    console.log("yes");
}else{
    console.log("no");
}

