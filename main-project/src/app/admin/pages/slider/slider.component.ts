import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  allImage:any=[];
  image:any;
  constructor(
    private _http :HttpClient
  ) {
    this._http.get<any>("http://localhost:3000/api/image").subscribe(result=>{
      this.allImage = result;
    })
   }

  ngOnInit(): void {
  }

  add(img:any){
    let image = img.files[0];
    let form = new FormData();
    form.append("image", image);

    this._http.post<any>("http://localhost:3000/api/image", form).subscribe(result=>{
      console.log(result);
      this.allImage.push(result);
      this.image="";
    })
  }
}
