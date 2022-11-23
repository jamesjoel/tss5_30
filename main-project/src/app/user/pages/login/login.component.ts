import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  checkForm = false;
  errMsg = "";
  
  constructor(
    private _fb : FormBuilder,
    private _auth : AuthService,
    private _router : Router
  ) {
    this.loginForm = this._fb.group({
      email : ["", [Validators.required, Validators.email]],
      password : ["", Validators.required]
    })
   }

  ngOnInit(): void {
  }

  submit(){
    if(this.loginForm.invalid){
      this.checkForm = true;
      return;
    }
    this._auth.doLogin(this.loginForm.value).subscribe(result=>{
      // console.log(result);
      if(result.success){
        localStorage.setItem("token", result.token);
        this._router.navigate(["/"]);
      }else{
        if(result.errType == 1){
          this.errMsg = "This Email/Username is not registred !";
        }
        if(result.errType == 2){
          this.errMsg = "This Password is not correct !";
        }
      }
    })
  }

}
