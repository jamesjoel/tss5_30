import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  allCity : any =[];
  constructor(
    private _city : CityService
  ) {
    this._city.getCity().subscribe(result=>{
      this.allCity = result;
    })
   }

  ngOnInit(): void {
  }

}
