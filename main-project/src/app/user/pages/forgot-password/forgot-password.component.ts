import { Component, OnInit } from '@angular/core';
import { Router, RouteReuseStrategy } from '@angular/router';
import { ForgotService } from '../../services/forgot.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  username:any;
  errMsg:any;
  checkOtp=false;
  otpErrMsg:any;
  otp:any;

  constructor(
    private _forgot : ForgotService,
    private _router : Router
  ) { }

  ngOnInit(): void {
  }
  check(){
    let obj = { username : this.username };
    this._forgot.checkUsername(obj).subscribe(result=>{
      if(result.success == false){
        this.errMsg = "This Username/Email does not exists";
      }else{
        this.checkOtp = true;
      }
    })
  }

  checkOtpFun(){
    let obj = { otp : this.otp, username : this.username };
    this._forgot.checkOtp(obj).subscribe(result=>{
      console.log(result);
    })
  }

}
