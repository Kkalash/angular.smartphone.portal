import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'preisFormatter' })
export class PreisFormatterPipe implements PipeTransform {
  transform(value: number): string {
    const formatter = new Intl.NumberFormat('de-EU', {
      currency: 'EUR',
    });

    return `€ ${formatter.format(value)}`;
  }
}
