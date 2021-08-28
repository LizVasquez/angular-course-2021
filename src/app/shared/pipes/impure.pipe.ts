import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impure',
  pure: false
})
export class ImpurePipe implements PipeTransform {

  transform(value: number[]): number[]{
    return value.filter(s => s%2 ===0);
  }

}