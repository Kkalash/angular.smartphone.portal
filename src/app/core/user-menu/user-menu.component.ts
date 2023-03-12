import { Component } from '@angular/core';
import { AppRoute } from '../../_shared/enums/app-route.enum';
import { AuthenticationService } from '../../_shared/servicers/authentication.service';

@Component({
  selector: 'ka-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['././user-menu.component.scss'],
})
export class UserMenuComponent {
  readonly AppRouteSignIn = `/${AppRoute.Auth}/${AppRoute.SignIn}`;
  isMenuCollapsed = true;

  constructor(public authService: AuthenticationService) {}
}
