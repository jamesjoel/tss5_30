import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service';
import { UserService } from '../../services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  showPassClass = "fa-eye";
  strength = 0;
  passPer = 10;
  passWord = "weak";

  passClass = "bg-danger";

  

  allCity : any =[];
  allState : any = [];
  username:any;
  constructor(
    private _city : CityService,
    private _fb : FormBuilder,
    private _user : UserService,
    private _router : Router
  ) {
      

      this.signupForm = this._fb.group({
          name : ["", Validators.required],
          email : ["", [Validators.required, Validators.email]],
          password : ["", Validators.required],
          re_password : ["", Validators.required],
          address : ["", Validators.required],
          city : ["", Validators.required],
          gender : ["", Validators.required],
          contact : ["", Validators.required],
          state : ["", Validators.required]
      }, {
        validator : [checkPass(), checkNum(), checkLength()]
      });

      this._city.getState().subscribe(result=>{
        this.allState = result;
      })

   }

  ngOnInit(): void {
  }


  save(){
    if(this.signupForm.invalid){
      this.checkForm = true;
      return;
    }
    // this._user.addUser(this.signupForm.value)
    // console.log(this.signupForm.value);
    this._user.addUser(this.signupForm.value).subscribe(result=>{
      //console.log(result);
      this._router.navigate(["/login"]);
    })
  }

  showPass(){
    this.x = this.x=='password' ? 'text' : 'password';
    this.showPassClass = this.x=='password' ? 'fa-eye' : 'fa-eye-slash';
  }

  strongPass(){
    let p = this.signupForm.controls['password'].value;
    this.strength=0;
    if(p.length > 5)
    {
      this.strength++;
    }
    if(p.match(/[a-z]+/))
    {
      this.strength++;
    }
    if(p.match(/[0-9]+/))
    {
      this.strength++;
    }
    if(p.match(/[A-Z]+/))
    {
      this.strength++;
    }
    switch(this.strength){
      case 0 : this.passPer = 10;
              this.passWord = "weak";
              this.passClass = "bg-danger";
            break;

      case 1 : this.passPer = 25;
              this.passWord = "poor";
              this.passClass = "bg-warning";
              break;
      case 2 : this.passPer = 50;
              this.passWord = "good";
              this.passClass = "bg-info";
            break;
      case 3 : this.passPer = 75;
              this.passWord = "strong";
              this.passClass = "bg-primary";
            break;
      case 4 : this.passPer = 100;
            this.passWord = "very strong";
            this.passClass = "bg-success";
          break;
    }


  }


  getCity(){
    this._city.getCityByState(this.signupForm.controls['state'].value).subscribe(result=>{
      this.allCity = result;
    })
  }

  checkUserName(){
    // if(this.signupForm.valid){
      // console.log(this.signupForm.controls['email'].value);
    // }
    let u = this.signupForm.controls['email'].value;
    let obj = { user : u };
    this._user.checkUserName(obj).subscribe(result=>{
      if(result.size == 1){

        this.signupForm.controls['email'].setErrors({ userErr : true });
      }
    })

  }
  

}
