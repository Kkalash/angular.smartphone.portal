import { Component, Input } from '@angular/core';
import { SmartphoneDetails } from '../../_shared/models/smartphone-details.model';

@Component({
  selector: 'ka-smartphone-details',
  templateUrl: './smartphone-details.component.html',
  styleUrls: ['./smartphone-details.component.scss'],
})
export class SmartphoneDetailsComponent {
  @Input() item: SmartphoneDetails;

  constructor() {}
}
