import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { MyCartService } from 'src/app/services/my-cart.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  allCategory:any=[];
  total=0;
  constructor(
    private _cate : CategoryService,
    public _auth : AuthService,
    public _mycart : MyCartService
  ) {
    this._cate.getCategory().subscribe(result=>{
      this.allCategory = result;
    })

    _mycart.sub.subscribe(data=>{
      // console.log(data)
      this.total = data;
    })
   }

  ngOnInit(): void {
  }

}
