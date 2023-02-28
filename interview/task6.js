var que = 500;
for(var j=3; j<=que; j++)
{
    var num = j;
    var check = true;
    for(var i = 2; i< num/2; i++)
    {
        if(num%i == 0){
            check = false;
            break;
        }
        
    }

    if(check==true){
        console.log(num);
    }
}




