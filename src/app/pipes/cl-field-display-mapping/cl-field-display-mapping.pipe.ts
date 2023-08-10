import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clFieldDisplayMapping'
})
export class ClFieldDisplayMappingPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
