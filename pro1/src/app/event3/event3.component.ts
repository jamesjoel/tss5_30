import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event3',
  templateUrl: './event3.component.html',
  styleUrls: ['./event3.component.css']
})
export class Event3Component implements OnInit {

  t = 0;
  l = 0;
  constructor() { }

  ngOnInit(): void {
  }
  demo(){
    let a = Math.random()*800;
    let b = Math.floor(a);
    
    let x = Math.random()*600;
    let y = Math.floor(x);
    
    this.l = b;
    this.t = y;
  }

}
