import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoute } from '../_shared/enums/app-route.enum';
import { RouteParam } from '../_shared/enums/route-param.enum';
import { SmartphoneDetailsResolver } from '../_shared/resolvers/smartphone-details.resolver';
import { SmartphoneItemComponent } from './smartphone-item/smartphone-item.component';
import { SmartphoneListComponent } from './smartphone-list/smartphone-list.component';
import { SmartphoneReviewComponent } from './smartphone-review/smartphone-review.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SmartphoneListComponent,
  },
  {
    path: `:${RouteParam.SmartphoneId}`,
    resolve: {
      [RouteParam.SmartphoneDetails]: SmartphoneDetailsResolver,
    },
    component: SmartphoneItemComponent,
  },
  {
    path: AppRoute.Review,
    children: [
      {
        path: `:${RouteParam.SmartphoneId}`,
        resolve: {
          [RouteParam.SmartphoneDetails]: SmartphoneDetailsResolver,
        },
        component: SmartphoneReviewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmartphonRoutingModule {}
