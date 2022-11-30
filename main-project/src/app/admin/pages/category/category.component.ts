import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  cateForm : FormGroup;
  checkForm = false;
  id : any;
  constructor(
    private _cate : CategoryService,
    private _fb : FormBuilder,
    private _router : Router,
    private _actRoute : ActivatedRoute
  ) {
    this.cateForm = this._fb.group({
      _id : null,
      name : ["", Validators.required],
      __v : null
    })

    this.id = this._actRoute.snapshot.paramMap.get("id");
    if(this.id){
      this._cate.getCategoryById(this.id).subscribe(result=>{
        // console.log(result);
        this.cateForm.setValue(result);
        
      })
    }


   }

  ngOnInit(): void {
  }

  add(){
    
    if(this.cateForm.invalid){
      this.checkForm = true;
      return;
    }

    if(this.id){
      this._cate.upateCategroy(this.id, this.cateForm.value).subscribe(result=>{
        this._router.navigate(["/admin/category/list"]);
      })
    }else{
      this._cate.addCategory(this.cateForm.value).subscribe(result=>{
        this._router.navigate(["/admin/category/list"]);
      })
    }

    
  }
  

}


/*
  let b = a==10 ? 20 : 40;

*/