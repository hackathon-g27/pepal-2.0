import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): unknown {
    return ((value > 60)? Math.floor(value / 60) + 'h' : '') + ((value % 60 < 10)? '0' + value % 60 : value % 60) + ((value < 60)? 'min' : '');
  }

}
