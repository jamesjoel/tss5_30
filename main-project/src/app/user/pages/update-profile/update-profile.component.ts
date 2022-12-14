import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  updateForm : FormGroup;
  checkForm = false;
  allState : any = [];
  allCity : any = [];
  constructor(
    private _fb : FormBuilder,
    private _profile : ProfileService,
    private _city : CityService
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
    this._city.getState().subscribe(result=>{
      this.allState = result;
    })


    this._profile.getUserProfile().subscribe(result=>{
      delete result.password;
      
      let state = result.state;
      this._city.getCityByState(state).subscribe(result2=>{
        // console.log(result2);
        // this.allCity = result2;
        this.allCity=result2.map((x : any)=>{
          return x.name;
        });

        
        
        this.updateForm.setValue(result);
      })
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

  getCity(){
    this._city.getCityByState(this.updateForm.controls['state'].value).subscribe(result=>{
      this.allCity=result.map((x : any)=>{
        return x.name;
      });
    })
  }
}
