import { Component } from '@angular/core';
import { AuthenticationService } from '../../_shared/servicers/authentication.service';

@Component({
  selector: 'ka-sign-up',
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {
  constructor(public authService: AuthenticationService) {}
}
