import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  a = 15;
  b = "indore";

  x = 'rohit';

  constructor(
    private z : MyserviceService
  ) { }

  ngOnInit(): void {
  }

  demo(){
    this.z.hello();
  }

}
