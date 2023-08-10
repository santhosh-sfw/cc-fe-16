import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initcaps'
})
export class InitcapsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
