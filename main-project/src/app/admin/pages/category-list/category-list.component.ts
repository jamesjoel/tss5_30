import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  allCategory:any=[];
  category:any;
  tempCategory : any;
  constructor(
    private _cate : CategoryService
  ) {
    this._cate.getCategory().subscribe(result=>{
      this.allCategory = result;
    })
   }

  ngOnInit(): void {
  }
  askDelete(obj:any){
    // console.log(obj);
    this.category = obj;
    this.tempCategory = this.category;
    this.tempCategory.title = this.category.name;
    // console.log(this.tempCategory);
  }

  confDelete(btn:any){
    
    this._cate.deleteCategory(this.category).subscribe(result=>{
      if(result.success==true){
        let n = this.allCategory.indexOf(this.category);
        this.allCategory.splice(n, 1);
        btn.click();
      }
    })
  }
}
