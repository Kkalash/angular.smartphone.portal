import { Component } from '@angular/core';
import { AppRoute } from '../../_shared/enums/app-route.enum';

@Component({
  selector: 'ka-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['././user-menu.component.scss'],
})
export class UserMenuComponent {
  readonly AppRoute = `/${AppRoute.Auth}/${AppRoute.SignIn}`;
  isMenuCollapsed = true;
}
