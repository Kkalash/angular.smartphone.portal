import { Component, Input, OnInit } from '@angular/core';
import { AppRoute } from '../../_shared/enums/app-route.enum';
import { Kommentar } from '../../_shared/models/kommentar.model';
import { AuthenticationService } from '../../_shared/servicers/authentication.service';

@Component({
  selector: 'ka-smartphone-kommentare',
  templateUrl: './smartphone-kommentare.component.html',
})
export class SmartphoneKommentareComponent implements OnInit {
  @Input() smartphoneId: string;
  @Input() kommentare: Kommentar[];
  @Input() ranking: number;
  @Input() bewerteranzahl: number;

  appRoute: string;

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.appRoute = this.authService.isLoggedIn
      ? `/${AppRoute.SmartphoneList}/${AppRoute.Review}/${this.smartphoneId}`
      : `/${AppRoute.Auth}/${AppRoute.SignIn}`;

    this.kommentare.sort(
      (k1: Kommentar, k2: Kommentar) =>
        new Date(k2.erfassungAm).getTime() - new Date(k1.erfassungAm).getTime(),
    );
  }
}
