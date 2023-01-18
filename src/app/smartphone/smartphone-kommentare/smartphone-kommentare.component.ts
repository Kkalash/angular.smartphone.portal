import { Component, Input, OnInit } from '@angular/core';
import { AppRoute } from '../../_shared/enums/app-route.enum';
import { Kommentar } from '../../_shared/models/kommentar.model';

@Component({
  selector: 'ka-smartphone-kommentare',
  templateUrl: './smartphone-kommentare.component.html',
})
export class SmartphoneKommentareComponent implements OnInit {
  @Input() smartphoneId: string;
  @Input() kommentare: Kommentar[];
  @Input() ranking: number;
  @Input() bewerteranzahl: number;

  appRoute = `/${AppRoute.Review}`;

  constructor() {}

  ngOnInit(): void {
    this.kommentare.sort(
      (k1: Kommentar, k2: Kommentar) =>
        new Date(k2.erfassungAm).getTime() - new Date(k1.erfassungAm).getTime(),
    );
  }
}
