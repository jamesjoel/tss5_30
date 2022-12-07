import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-box2',
  templateUrl: './box2.component.html',
  styleUrls: ['./box2.component.css']
})
export class Box2Component implements OnInit {

  @Output() myEvent = new EventEmitter();
  @Output() myEvent2 = new EventEmitter();

  name = "rohit varma";
  constructor() { }

  ngOnInit(): void {
  }

  go(){
    this.myEvent.emit(this.name);
  }
  demo(){
    this.myEvent2.emit(["red", "green", "blue"]);
  }

}
