import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyCartService {

  sub = new BehaviorSubject(0); // default value of sub
  constructor() {
    
   }

   
}
