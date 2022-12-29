import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RouteParam } from '../../_shared/enums/route-param.enum';
import { SmartphoneDetails } from '../../_shared/models/smartphone-details.model';

@Component({
  selector: 'ka-smartphone-item',
  templateUrl: './smartphone-item.component.html',
  styleUrls: ['./smartphone-item.component.scss'],
})
export class SmartphoneItemComponent implements OnInit {
  private readonly subscription: Subscription = new Subscription();

  selectedBild: string;
  item: SmartphoneDetails;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription.add(
      this.route.data.subscribe((data) => {
        this.item = data[RouteParam.SmartphoneDetails];
        this.selectedBild = this.item.bilder[0];
      }),
    );
  }
}
