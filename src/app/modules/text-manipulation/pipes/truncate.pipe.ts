import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, length: number): string {
    if (length > value.length - 1 || length < 1 ) return value;

    return value.slice(0, length) + '...';
  }

}
