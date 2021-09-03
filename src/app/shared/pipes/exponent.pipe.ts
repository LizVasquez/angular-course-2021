import { Pipe, PipeTransform } from '@angular/core';
/* CLASE 20/08  */

@Pipe({
  name: 'exponent'
})
export class ExponentPipe implements PipeTransform {

  /*transform(value: number): number {
    return value *2;
  }*/

  /*transform(value: number, exponent: number): number {
    return Math.pow(value, exponent);
  }*/

  transform(value: number, exponent?:number): number {
    return Math.pow(value, isNaN(exponent) ? 1 : exponent);
  }

}