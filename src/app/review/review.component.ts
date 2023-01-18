import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppRoute } from '../_shared/enums/app-route.enum';
import { RouteParam } from '../_shared/enums/route-param.enum';
import { Kommentar } from '../_shared/models/kommentar.model';
import { SmartphoneCard } from '../_shared/models/smartphone-card.model';
import { KommentarService } from '../_shared/servicers/kommentar.service';
import { SmartphoneListService } from '../_shared/servicers/smartphon-list.service';

@Component({
  selector: 'ka-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  private readonly subscription: Subscription = new Subscription();
  private readonly AppRoute = `/${AppRoute.SmartphoneList}`;

  item: SmartphoneCard;

  titel = '';
  textarea = '';

  stars = [1, 2, 3, 4, 5];
  bewertung = 0;

  constructor(
    private kommentarService: KommentarService,
    private smartphoneListService: SmartphoneListService,
    private route: ActivatedRoute,
    private router: Router,
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
    if (this.titel.length && this.textarea.length && this.bewertung !== 0) {
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
        bewertung: this.bewertung,
        antowrten: [],
      };

      this.kommentarService.kommentarAbsenden(kommentar).subscribe({
        next: () =>
          this.router.navigate([this.AppRoute, kommentar.smartphoneId]),
      });
    }
  }
}
