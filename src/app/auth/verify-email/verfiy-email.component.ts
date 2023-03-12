import { Component } from '@angular/core';
import { AppRoute } from '../../_shared/enums/app-route.enum';
import { AuthenticationService } from '../../_shared/servicers/authentication.service';

@Component({
  selector: 'ka-verify-email',
  templateUrl: './verfiy-email.component.html',
})
export class VerifyEmailComponent {
  readonly appRouteSignIn = `/${AppRoute.Auth}/${AppRoute.SignIn}`;

  constructor(public authService: AuthenticationService) {}
}
