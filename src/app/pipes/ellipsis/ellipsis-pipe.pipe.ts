import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsisPipe'
})
export class EllipsisPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
