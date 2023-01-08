import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RouteParam } from '../_shared/enums/route-param.enum';
import { Kommentar } from '../_shared/models/kommentar.model';
import { SmartphoneCard } from '../_shared/models/smartphone-card.model';
import { SmartphoneListService } from '../_shared/servicers/smartphon-list.service';
import { SmartphoneKommentareService } from '../_shared/servicers/smartphone-kommentare.service';

@Component({
  selector: 'ka-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  private readonly subscription: Subscription = new Subscription();

  item: SmartphoneCard;

  titel: string;
  textarea: string;

  constructor(
    private kommentareService: SmartphoneKommentareService,
    private smartphoneListService: SmartphoneListService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.route.params.subscribe((params) => {
        const id = params[RouteParam.SmartphoneId];
        this.smartphoneListService.getById(id).subscribe((data) => {
          this.item = data;
        });
      }),
    );
  }

  absenden(): void {
    if (this.titel.length && this.textarea.length) {
      const kommentar: Kommentar = {
        id: '',
        smartphoneId: this.item.id,
        nameAnzeige: 'User',
        titel: this.titel,
        text: this.textarea,
        erfassungAm: new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate(),
        ),
        bewertung: null,
        antowrten: [],
      };

      this.kommentareService.kommentarAbsenden(kommentar).subscribe();
    }
  }
}
