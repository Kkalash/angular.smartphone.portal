import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmartphoneModule } from './smartphone/smartphone.module';
import { AppRoute } from './_shared/enums/app-route.enum';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppRoute.SmartphoneList,
  },
  {
    path: AppRoute.SmartphoneList,
    loadChildren: () => SmartphoneModule,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
