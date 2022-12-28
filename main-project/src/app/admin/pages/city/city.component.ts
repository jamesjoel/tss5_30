import { Component, OnInit } from '@angular/core';
import { CityPaginationService } from '../../services/city-pagination.service';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  allCity : any = [];
  totalRec : any;
  recPerPage = 200;
  totalPages : any;
  skip=0;
  currentPage = 0;
  page = 1;

  constructor(
    private _cityPage : CityPaginationService
  ) {
      this._cityPage.getTotalCity().subscribe(result=>{
        this.totalRec = result.total;
        this.totalPages = Math.ceil(this.totalRec/this.recPerPage); // 1221/100
        
      })  
      
      this._cityPage.getRecord(this.recPerPage, this.skip).subscribe(result=>{
        this.allCity = result;
      })
   }

  ngOnInit(): void {
  }

  paginate(a:any){
    this.page = a;
    this.currentPage = (a-1)*this.recPerPage;
    this._cityPage.getRecord(this.recPerPage, a).subscribe(result=>{
      this.allCity = result;
    })
  }

}
