import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mailto',
})
export class MailtoPipe implements PipeTransform {
  transform(mail: string): string {
    return mail && `mailto:${mail}`;
  }
}
