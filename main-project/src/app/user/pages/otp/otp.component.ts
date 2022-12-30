import { Component, OnInit } from '@angular/core';
import { ForgotService } from '../../services/forgot.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  otp : any;
  errMsg: any;

  constructor(
    private _forgot : ForgotService
  ) { }

  ngOnInit(): void {
  }
  check(){
    let obj = { otp : this.otp };
    
  }

}
