import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'skipUnderscore'
})
export class SkipUnderscorePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
