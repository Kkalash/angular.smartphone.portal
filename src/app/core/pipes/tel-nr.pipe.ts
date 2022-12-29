import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telNr',
})
export class TelNrPipe implements PipeTransform {
  transform(phone: string): string {
    return phone && `tel:${phone}`;
  }
}
