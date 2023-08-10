import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expandArray'
})
export class ExpandArrayPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
