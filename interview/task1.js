var count = 20;
for(var i =1; i<=count; i++)
{
    var star = "";
    for(var j=1; j<=count; j++)
    {
        if(i==1 || i==count || j==1 || j==count){

            star += "*";
        }else{
            
                star +=" ";
        }
    }
    console.log(star);
}