import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pure',
  pure: true
})
export class PurePipe implements PipeTransform {

  transform(value: number[]): number[] {
    return value.filter(s => s%2 ===0);
  }

}