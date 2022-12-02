import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  allCity : any = [];

  a = "gaurav";
  b = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos libero aperiam tempora omnis voluptas atque assumenda consectetur alias aliquam, numquam nulla non ut nam iste voluptatibus aut doloribus, eius delectus.";

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
