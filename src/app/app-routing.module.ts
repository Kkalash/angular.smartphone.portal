import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewComponent } from './review/review.component';
import { SmartphoneModule } from './smartphone/smartphone.module';
import { AppRoute } from './_shared/enums/app-route.enum';
import { RouteParam } from './_shared/enums/route-param.enum';
import { SmartphoneDetailsResolver } from './_shared/resolvers/smartphone-details.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppRoute.SmartphoneList,
  },
  {
    path: AppRoute.Review,
    children: [
      {
        path: `:${RouteParam.SmartphoneId}`,
        resolve: {
          [RouteParam.SmartphoneDetails]: SmartphoneDetailsResolver,
        },
        children: [
          {
            path: '',
            component: ReviewComponent,
          },
        ],
      },
    ],
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
