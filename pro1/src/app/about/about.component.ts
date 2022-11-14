import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})


export class AboutComponent{

  data:any=[];

  constructor(
    private _http : HttpClient
  ){

  }


  demo(){
    this._http.get<any>("https://jsonplaceholder.typicode.com/albums").subscribe(result=>{
      console.log(result);
      this.data = result;
    })
  }

}
