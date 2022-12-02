import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  info = {
    title : "Samsung Galaxy S12",
    price : 12000
  }
  constructor() { }

  ngOnInit(): void {
  }

}
