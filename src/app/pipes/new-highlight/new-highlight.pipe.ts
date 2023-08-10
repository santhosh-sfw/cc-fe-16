import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newHighlight'
})
export class NewHighlightPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
