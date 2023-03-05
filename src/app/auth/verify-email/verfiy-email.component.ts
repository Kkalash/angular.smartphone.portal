import { Component } from '@angular/core';
import { AuthenticationService } from '../../_shared/servicers/authentication.service';

@Component({
  selector: 'ka-verify-email',
  templateUrl: './verfiy-email.component.html',
})
export class VerifyEmailComponent {
  constructor(public authService: AuthenticationService) {}
}
