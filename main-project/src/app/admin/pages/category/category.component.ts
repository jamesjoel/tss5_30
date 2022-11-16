import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  // name:any;
  msg="";

  category = {
    name : ""

  }
  constructor(
    private _cate : CategoryService
  ) { }

  ngOnInit(): void {
  }

  add(){
    this._cate.addCategory(this.category).subscribe(result=>{
      // console.log(result);
      if(result.success){
        this.msg = "Data Added Successfuly !";
        this.category = {
          name : ""
        }
      }
    })
  }

}
