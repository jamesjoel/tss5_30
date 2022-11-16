import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  allCategory:any=[];
  constructor(
    private _cate : CategoryService
  ) {
    this._cate.getCategory().subscribe(result=>{
      this.allCategory = result;
    })
   }

  ngOnInit(): void {
  }

}
