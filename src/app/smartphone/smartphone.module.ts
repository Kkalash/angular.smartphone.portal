import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { UiModule } from '../ui/ui.moudle';
import { SmartphoneDetailsComponent } from './smartphone-details/smartphone-details.component';
import { SmartphoneItemComponent } from './smartphone-item/smartphone-item.component';
import { SmartphoneKommentareComponent } from './smartphone-kommentare/smartphone-kommentare.component';
import { SmartphoneListComponent } from './smartphone-list/smartphone-list.component';
import { SmartphoneReviewComponent } from './smartphone-review/smartphone-review.component';
import { SmartphonRoutingModule } from './smartphone-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    SmartphonRoutingModule,
    UiModule,
  ],
  declarations: [
    SmartphoneDetailsComponent,
    SmartphoneItemComponent,
    SmartphoneKommentareComponent,
    SmartphoneListComponent,
    SmartphoneReviewComponent,
  ],
})
export class SmartphoneModule {}
