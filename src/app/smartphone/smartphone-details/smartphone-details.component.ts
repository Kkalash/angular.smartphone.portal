import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RouteParam } from '../../_shared/enums/route-param.enum';
import { SmartphoneDetails } from '../../_shared/models/smartphone-details.model';

@Component({
  selector: 'ka-smartphone-details',
  templateUrl: './smartphone-details.component.html',
})
export class SmartphoneDetailsComponent implements OnInit {
  private readonly subscription: Subscription = new Subscription();

  item: SmartphoneDetails;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription.add(
      this.route.data.subscribe((data) => {
        this.item = data[RouteParam.SmartphoneId];
        console.log(this.item);
        console.log(data);
      }),
    );
  }
}
