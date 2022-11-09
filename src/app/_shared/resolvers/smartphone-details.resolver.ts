import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { RouteParam } from '../enums/route-param.enum';
import { SmartphoneDetails } from '../models/smartphone-details.model';
import { SmartphoneDetailsService } from '../servicers/smartphone-details.service';

@Injectable({
  providedIn: 'root',
})
export class SmartphoneDetailsResolver implements Resolve<SmartphoneDetails> {
  constructor(private detailsService: SmartphoneDetailsService) {}

  resolve(
    routeSnapshot: ActivatedRouteSnapshot,
  ): Observable<SmartphoneDetails> {
    return this.detailsService
      .get(Number(routeSnapshot.paramMap.get(RouteParam.SmartphoneId)))
      .pipe(catchError(() => of(null)));
  }
}
