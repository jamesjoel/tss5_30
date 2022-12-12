import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  updateForm : FormGroup;
  checkForm = false;
  constructor(
    private _fb : FormBuilder,
    private _profile : ProfileService
  ) {
    this.updateForm = this._fb.group({
      _id : null,
      __v : null,
      
      name : ["", Validators.required],
      email : [{value : "", disabled : true }, Validators.required],
      address : ["", Validators.required],
      state : ["", Validators.required],
      city : ["", Validators.required],
      gender : ["", Validators.required],
      contact : [null, Validators.required],
    })


    this._profile.getUserProfile().subscribe(result=>{
      delete result.password;
      this.updateForm.setValue(result);
    })
   }

  ngOnInit(): void {
  }

  submit(){
    if(this.updateForm.invalid){
      this.checkForm = true;
      return;
    }
    console.log(this.updateForm.value);
  }

}
