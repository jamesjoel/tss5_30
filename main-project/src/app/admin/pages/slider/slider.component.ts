import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor(
    private _http :HttpClient
  ) { }

  ngOnInit(): void {
  }

  add(img:any){
    let image = img.files[0];
    let form = new FormData();
    form.append("image", image);

    this._http.post<any>("http://localhost:3000/api/image", form).subscribe(result=>{
      console.log(result);
    })
  }
}
