import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteParam } from '../_shared/enums/route-param.enum';
import { SmartphoneDetailsResolver } from '../_shared/resolvers/smartphone-details.resolver';
import { SmartphoneDetailsComponent } from './smartphone-details/smartphone-details.component';
import { SmartphoneListComponent } from './smartphone-list/smartphone-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
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
        children: [
          {
            path: '',
            component: SmartphoneDetailsComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmartphonRoutingModule {}
