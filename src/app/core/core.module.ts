import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MailtoPipe } from './pipes/mailto.pipe';
import { TelNrPipe } from './pipes/tel-nr.pipe';
import { PreisFormatterPipe } from './pipes/preis-formatter.pipe';
import { UserMenuComponent } from './user-menu/user-menu.component';

@NgModule({
  imports: [FormsModule, CommonModule],
  declarations: [UserMenuComponent, PreisFormatterPipe, MailtoPipe, TelNrPipe],
  exports: [UserMenuComponent, PreisFormatterPipe, MailtoPipe, TelNrPipe],
})
export class CoreModule {}
