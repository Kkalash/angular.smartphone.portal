import { Component } from '@angular/core';
import { AppRoute } from '../../_shared/enums/app-route.enum';
import { AuthenticationService } from '../../_shared/servicers/authentication.service';

@Component({
  selector: 'ka-forgot-password',
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent {
  readonly appRoute = `/${AppRoute.Auth}/${AppRoute.SignIn}`;
  constructor(public authService: AuthenticationService) {}
}
