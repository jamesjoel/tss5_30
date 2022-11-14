import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-event4',
  templateUrl: './event4.component.html',
  styleUrls: ['./event4.component.css']
})
export class Event4Component implements OnInit {

  constructor(
    private x : MyserviceService
  ) { }

  ngOnInit(): void {
  }

  demo(){
    this.x.hello();
  }

}
