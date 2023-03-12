import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoute } from '../_shared/enums/app-route.enum';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyEmailComponent } from './verify-email/verfiy-email.component';

const routes: Routes = [
  { path: AppRoute.SignIn, component: SignInComponent },
  { path: AppRoute.SignUp, component: SignUpComponent },
  { path: AppRoute.ForgotPassword, component: ForgotPasswordComponent },
  { path: AppRoute.VerfiyEmail, component: VerifyEmailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
