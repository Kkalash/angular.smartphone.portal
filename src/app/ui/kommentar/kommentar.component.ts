import { Component, Input } from '@angular/core';
import { KommentarAntwort } from '../../_shared/models/kommentar-antwort.model';
import { Kommentar } from '../../_shared/models/kommentar.model';
import { AntwortService } from '../../_shared/servicers/antwort.service';

@Component({
  selector: 'ka-kommentar',
  templateUrl: './kommentar.component.html',
})
export class KommentarComponent {
  @Input() kommentar: Kommentar;

  showInputField = false;

  constructor(private kommentarService: AntwortService) {}

  antworten($event) {
    if ($event.target.value.length) {
      const antwort: KommentarAntwort = {
        kommentarId: this.kommentar.id,
        nameAnzeige: 'User',
        erfassungAm: new Date(),
        text: $event.target.value,
      };

      this.kommentarService.antworten(antwort).subscribe((respo) => {
        this.kommentar.antowrten.push(respo);
        $event.target.value = '';
      });
    }
  }
}
