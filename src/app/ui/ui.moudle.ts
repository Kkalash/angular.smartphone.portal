import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { CardComponent } from './card/card.component';
import { KommentarComponent } from './kommentar/kommentar.component';

@NgModule({
  imports: [CommonModule, CoreModule, FormsModule, RouterModule],
  declarations: [CardComponent, KommentarComponent],
  exports: [CardComponent, KommentarComponent],
})
export class UiModule {}
