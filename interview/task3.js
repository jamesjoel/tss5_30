var count = 7;
var total = (count*2)-1;

var star = "";
var temp = 0;
for(var i = 1; i<=total; i++)
{
    
    var j = i-temp;
    star += " "+j;
    if(i>=count){
        temp += 2;
    }
    
}
console.log(star);