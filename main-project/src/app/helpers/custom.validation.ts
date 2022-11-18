import { FormGroup } from "@angular/forms";
export function checkPass()
{
    return function(abc : FormGroup){
        let a = abc.controls['password'];
        let b = abc.controls['re_password'];

        if(b.errors && ! b.errors['passErr'])
        {
            return;
        }

        if(a.value != b.value)
        {
            b.setErrors({ passErr : true })
        }
    }
}

export function checkLength()
{
    return function(xyz : FormGroup){
        let a = xyz.controls['contact'];

        if(a.errors && ! a.errors['lengthErr'])
        {
            return;
        }

        if(a.value.length != 10)
        {
            a.setErrors({ lengthErr : true });
        }
    }
}



export function checkNum()
{
    return function(myForm : FormGroup){
        let a = myForm.controls['contact'];

        if(a.errors && ! a.errors['numErr'])
        {
            return;
        }

        if(isNaN(a.value))
        {
            a.setErrors({ numErr : true });
        }
        // if(isNaN(a)) --- is Not A Number
    }
}