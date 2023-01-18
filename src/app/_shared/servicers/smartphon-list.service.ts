import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { find, map, Observable, switchMap } from 'rxjs';
import {
  HttpConfiguration,
  HTTP_CONFIGURATION,
} from '../configuration/http.configuration';
import { ApiPath } from '../enums/api-path.enum';
import { SmartphoneCard } from '../models/smartphone-card.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class SmartphoneListService extends HttpService {
  constructor(
    http: HttpClient,
    @Inject(HTTP_CONFIGURATION) httpConfiguration: HttpConfiguration,
  ) {
    super(http, httpConfiguration, ApiPath.SmartphoneList);
  }

  public getAll(): Observable<SmartphoneCard[]> {
    return this.http
      .get<SmartphoneCard[]>(`${this.fullUrl}`)
      .pipe(map((card) => card));
  }

  public getById(id: string): Observable<SmartphoneCard> {
    return this.getAll().pipe(
      switchMap((cards) => cards),
      find((card) => card.id === id),
    );
  }
}
