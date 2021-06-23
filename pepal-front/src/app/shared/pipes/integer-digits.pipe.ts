import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'integerDigits'
})
export class IntegerDigitsPipe implements PipeTransform {

  transform(value: number, nbDigits: number): unknown {
    return value.toLocaleString('fr-FR', {minimumIntegerDigits: nbDigits});
  }

}
