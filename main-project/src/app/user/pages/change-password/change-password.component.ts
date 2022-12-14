import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  passForm : FormGroup;
  checkForm = false;
  constructor(
    private _fb : FormBuilder
  ) {
    this.passForm = this._fb.group({
      old_pass : ["", Validators.required],
      new_pass : ["", Validators.required],
      conf_new_pass : ["", Validators.required];
    })
   }

  ngOnInit(): void {
  }

}
