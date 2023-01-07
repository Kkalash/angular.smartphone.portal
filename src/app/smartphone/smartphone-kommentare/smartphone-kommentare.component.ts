import { Component, Input, OnInit } from '@angular/core';
import { Kommentar } from '../../_shared/models/kommentar.model';

@Component({
  selector: 'ka-smartphone-kommentare',
  templateUrl: './smartphone-kommentare.component.html',
})
export class SmartphoneKommentareComponent implements OnInit {
  @Input() kommentare: Kommentar[];

  constructor() {}

  ngOnInit(): void {
    this.kommentare.sort((k1, k2) => +k1.erfassungAm - +k2.erfassungAm);
  }
}
