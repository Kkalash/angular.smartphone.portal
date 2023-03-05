import { Component } from '@angular/core';
import { AppRoute } from '../../_shared/enums/app-route.enum';
import { AuthenticationService } from '../../_shared/servicers/authentication.service';

@Component({
  selector: 'ka-sign-up',
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {
  readonly appRouteSignIn = `/${AppRoute.Auth}/${AppRoute.SignIn}`;

  constructor(public authService: AuthenticationService) {}
}
