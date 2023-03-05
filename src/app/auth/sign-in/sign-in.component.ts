import { Component } from '@angular/core';
import { AppRoute } from '../../_shared/enums/app-route.enum';
import { AuthenticationService } from '../../_shared/servicers/authentication.service';

@Component({
  selector: 'ka-sign-in',
  templateUrl: './sign-in.component.html',
})
export class SignInComponent {
  readonly appRouteForotPassword = `/${AppRoute.Auth}/${AppRoute.ForgotPassword}`;
  readonly appRouteSignUp = `/${AppRoute.Auth}/${AppRoute.SignUp}`;

  constructor(public authService: AuthenticationService) {}
}
