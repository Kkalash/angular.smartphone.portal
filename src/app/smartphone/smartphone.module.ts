import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { UiModule } from '../ui/ui.moudle';
import { SmartphoneDetailsComponent } from './smartphone-details/smartphone-details.component';
import { SmartphoneItemComponent } from './smartphone-item/smartphone-item.component';
import { SmartphoneListComponent } from './smartphone-list/smartphone-list.component';
import { SmartphonRoutingModule } from './smartphone-routing.module';

@NgModule({
  imports: [CommonModule, CoreModule, SmartphonRoutingModule, UiModule],
  declarations: [
    SmartphoneDetailsComponent,
    SmartphoneItemComponent,
    SmartphoneListComponent,
  ],
})
export class SmartphoneModule {}
