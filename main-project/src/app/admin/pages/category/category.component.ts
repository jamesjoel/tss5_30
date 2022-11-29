import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  cateForm : FormGroup;
  checkForm = false;
  constructor(
    private _cate : CategoryService,
    private _fb : FormBuilder,
    private _router : Router
  ) {
    this.cateForm = this._fb.group({
      name : ["", Validators.required]
    })
   }

  ngOnInit(): void {
  }

  add(){
    
    if(this.cateForm.invalid){
      this.checkForm = true;

      // console.log(this.cateForm.controls);
      // console.log(this.checkForm);
      return;
    }
    // console.log(this.cateForm.value);
    this._cate.addCategory(this.cateForm.value).subscribe(result=>{
      this._router.navigate(["/admin/category/list"]);
    })
  }
  

}
