
var count = 10;

for(var x = 1; x<=count; x++)
{
    var star = "";
    var space = "";
    var total = (x*2)-1;
    for(var y = 1; y<=total; y++)
    {
        if(x==1 || x==count || y==1 || y==total){

            star+="*";
        }else{
                star += " ";
            }
        
    }



    for(var z = x; z <=count-1; z++)
    {
        space+=" ";
    }
    console.log(space, star);
}


