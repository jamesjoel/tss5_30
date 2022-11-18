import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { checkPass, checkLength, checkNum } from '../../../helpers/custom.validation';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm : FormGroup;
  checkForm = false;

  x = "password";
  

  allCity : any =[];
  constructor(
    private _city : CityService,
    private _fb : FormBuilder
  ) {
      this._city.getCity().subscribe(result=>{
        this.allCity = result;
      })

      this.signupForm = this._fb.group({
          fullname : ["", Validators.required],
          email : ["", [Validators.required, Validators.email]],
          password : ["", Validators.required],
          re_password : ["", Validators.required],
          address : ["", Validators.required],
          city : ["", Validators.required],
          gender : ["", Validators.required],
          contact : ["", Validators.required]
      }, {
        validator : [checkPass(), checkNum(), checkLength()]
      });

   }

  ngOnInit(): void {
  }


  save(){
    if(this.signupForm.invalid){
      this.checkForm = true;
    }
    //console.log(this.signupForm.value);
  }

  showPass(){
    this.x = this.x=='password' ? 'text' : 'password';
  }


  

}
