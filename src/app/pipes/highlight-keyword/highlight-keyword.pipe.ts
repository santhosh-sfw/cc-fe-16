import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightKeyword'
})
export class HighlightKeywordPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
