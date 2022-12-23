import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare let $:any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  allImage : any = [];
  fee = 1500;
  a = new Date();
  name = "Amar";
  para = "hello world";
  constructor(
    private _http : HttpClient
  ) {
     

   }

  ngOnInit(): void {
    
    this._http.get<any>("http://localhost:3000/api/image").subscribe(result=>{
      this.allImage = result;
      console.log(this.allImage);
    })   
    
  }

  ngAfterViewInit(): void {
    $(".slider-container").ikSlider({
      speed: 500
    });
    $(".slider-container").on('changeSlide.ikSlider', function (evt:any) { console.log(evt.currentSlide); });
  }

  

  

}


