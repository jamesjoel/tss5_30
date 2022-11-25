import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  adminLoginForm : FormGroup;
  checkForm = false;
  errMsg = "";
  
  constructor(
    private _fb : FormBuilder,
    private _auth : AuthService,
    private _router : Router
  ) {
    this.adminLoginForm = this._fb.group({
      username : ["", Validators.required],
      password : ["", Validators.required]
    })
   }

  ngOnInit(): void {
  }

  submit(){
    if(this.adminLoginForm.invalid){
      this.checkForm = true;
      return;
    }

    // console.log(this.adminLoginForm.value);
    this._auth.doLogin(this.adminLoginForm.value).subscribe(result=>{
      if(result.success==true){
        // console.log(result);
        localStorage.setItem("admin_token", result.token);
        this._router.navigate(["/admin/dashboard"]);

      }else{
        if(result.errType == 1){
          this.errMsg = "This Username and Password is Incorrect";
        }
        if(result.errType==2){
          this.errMsg = "This Password is Incorrect";
        }
      }
    })
  }
}
