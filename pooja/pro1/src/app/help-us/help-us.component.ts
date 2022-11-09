import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-us',
  templateUrl: './help-us.component.html',
  styleUrls: ['./help-us.component.css']
})
export class HelpUsComponent implements OnInit {

  z="a";
  arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,25,16,44,5,5,5,6,77,77,77,7,7,77,7,7];

  stu = [{
    name:"pooja",
    age:30,
    fee:5000,
  },
  {
    name:"pranshu",
    age:30,
    fee:5000,
  },
  {
    name:"himanshu",
    age:30,
    fee:5000,
  }
]
demo(){
  console.log("welcome")
}
  constructor() { }

  ngOnInit(): void {
  }

}
