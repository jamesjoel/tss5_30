import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  passForm : FormGroup;
  checkForm = false;
  errMsg="";
  constructor(
    private _fb : FormBuilder,
    private _profile : ProfileService,
    private _auth : AuthService
  ) {
    this.passForm = this._fb.group({
      old_pass : ["", Validators.required],
      new_pass : ["", Validators.required],
      conf_new_pass : ["", Validators.required]
    })
   }

  ngOnInit(): void {
  }

  submit(){
    if(this.passForm.invalid){
      this.checkForm = true;
      return;
    }
    this._profile.changePassword(this.passForm.value).subscribe(result=>{
      // console.log(result);
      if(result.success == true)
      {
        this._auth.logout();
      }else{
        
        this.errMsg = "Your Current Password is Incorrect";
      }
    })
  }
}
