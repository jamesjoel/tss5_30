import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMydir]'
})
export class MydirDirective {

  constructor(
    private _ele : ElementRef
  ) {
    this._ele.nativeElement.style.backgroundColor = "green";
   }

   @HostListener('dblclick') demo(){
    console.log("welcome");
    this._ele.nativeElement.style.backgroundColor = "blue";
   }

}
