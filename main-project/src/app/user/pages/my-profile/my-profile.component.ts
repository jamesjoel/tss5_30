import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  user:any;
  constructor(
    private _profile : ProfileService
  ) {
    this._profile.getUserProfile().subscribe(result=>{
      // console.log(result);
      this.user = result;
    })
   }

  ngOnInit(): void {
  }

}
