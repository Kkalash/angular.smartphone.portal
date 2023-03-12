import { Component, Input } from '@angular/core';
import { AppRoute } from '../../_shared/enums/app-route.enum';
import { KommentarAntwort } from '../../_shared/models/kommentar-antwort.model';
import { Kommentar } from '../../_shared/models/kommentar.model';
import { AntwortService } from '../../_shared/servicers/antwort.service';
import { AuthenticationService } from '../../_shared/servicers/authentication.service';

@Component({
  selector: 'ka-kommentar',
  templateUrl: './kommentar.component.html',
})
export class KommentarComponent {
  @Input() kommentar: Kommentar;

  readonly AppRouteSignIn = `/${AppRoute.Auth}/${AppRoute.SignIn}`;
  readonly now = new Date();

  showInputField = false;

  constructor(
    private kommentarService: AntwortService,
    public authService: AuthenticationService,
  ) {}

  antworten($event) {
    if ($event.target.value.length) {
      const antwort: KommentarAntwort = {
        kommentarId: this.kommentar.id,
        nameAnzeige: this.authService.userData.displayName,
        erfassungAm: new Date(this.now.getTime()),
        text: $event.target.value,
      };

      this.kommentarService.antworten(antwort).subscribe((respo) => {
        this.kommentar.antowrten.push(respo);
        $event.target.value = '';
      });
    }
  }
}
