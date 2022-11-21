import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  checkForm = false;
  
  constructor(
    private _fb : FormBuilder,
    private _auth : AuthService
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
      console.log(result);
    })
  }

}
