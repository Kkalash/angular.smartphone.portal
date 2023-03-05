import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoute } from '../_shared/enums/app-route.enum';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: AppRoute.SignIn, component: SignInComponent },
  { path: AppRoute.SignUp, component: SignUpComponent },
  { path: AppRoute.ForgotPassword, component: ForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
