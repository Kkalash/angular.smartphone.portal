import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiModule } from '../ui/ui.moudle';
import { SmartphoneDetailsComponent } from './smartphone-details/smartphone-details.component';
import { SmartphoneListComponent } from './smartphone-list/smartphone-list.component';
import { SmartphonRoutingModule } from './smartphone-routing.module';

@NgModule({
  imports: [CommonModule, SmartphonRoutingModule, UiModule],
  declarations: [SmartphoneDetailsComponent, SmartphoneListComponent],
})
export class SmartphoneModule {}
