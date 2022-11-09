import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PreisFormatterPipe } from './pipes/preis-formatter.pipe';
import { UserMenuComponent } from './user-menu/user-menu.component';

@NgModule({
  imports: [FormsModule, CommonModule],
  declarations: [UserMenuComponent, PreisFormatterPipe],
  exports: [UserMenuComponent, PreisFormatterPipe],
})
export class CoreModule {}
