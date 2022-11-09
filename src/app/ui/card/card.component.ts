import { Component, Input } from '@angular/core';
import { AppRoute } from '../../_shared/enums/app-route.enum';
import { SmartphoneCard } from '../../_shared/models/smartphone-card.model';

@Component({
  selector: 'ka-card',
  templateUrl: 'card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() smartphoneCard: SmartphoneCard;

  readonly smartphoneListRoute = AppRoute.SmartphoneList;

  constructor() {}
}
