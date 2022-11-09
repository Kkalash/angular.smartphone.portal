import { Component, OnInit } from '@angular/core';
import { SmartphoneCard } from '../../_shared/models/smartphone-card.model';
import { SmartphoneListService } from '../../_shared/servicers/smartphon-list.service';

@Component({
  selector: 'ka-smartphone-list',
  templateUrl: 'smartphone-list.component.html',
})
export class SmartphoneListComponent implements OnInit {
  cards: SmartphoneCard[];

  constructor(private smartphoneListService: SmartphoneListService) {}

  ngOnInit(): void {
    this.smartphoneListService.getAll().subscribe((result) => {
      this.cards = result;
    });
  }
}
