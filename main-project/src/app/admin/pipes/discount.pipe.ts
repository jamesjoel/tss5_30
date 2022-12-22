import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(a : any, b: any) {
    let x = b*a/100;
    return b-x;
  }

}
