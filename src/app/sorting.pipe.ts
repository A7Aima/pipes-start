import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(value: any): unknown {
    if (value.length === 0) {
      return value;
    }
    return value.sort((a, b) => a.name > b.name ? 1 : -1);
    // return null;
  }

}
