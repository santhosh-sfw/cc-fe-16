import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'xmlify'
})
export class XmlifyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
