import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helpus',
  templateUrl: './helpus.component.html',
  styleUrls: ['./helpus.component.css']
})
export class HelpusComponent implements OnInit {

  z = 'c';
  arr = [5, 8, 10, 15, 20, 4, 32, 50];

  stu = [
    {
      name : "amar",
      age : 22,
      fee : 5000
    },
    {
      name : "rohit",
      age : 21,
      fee : 5500
    },
    {
      name : "nidhi",
      age : 20,
      fee : 6000
    },
    {
      name : "gaurav",
      age : 24,
      fee : 7500
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  demo(){
    console.log("welcome");
  }
}
