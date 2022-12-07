import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HTTP_CONFIGURATION,
  HttpConfiguration,
} from '../configuration/http.configuration';
import { ApiPath } from '../enums/api-path.enum';
import { SmartphoneDetails } from '../models/smartphone-details.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class SmartphoneDetailsService extends HttpService {
  constructor(
    http: HttpClient,
    @Inject(HTTP_CONFIGURATION) httpConfiguration: HttpConfiguration,
  ) {
    super(http, httpConfiguration, ApiPath.SmartphoneDetails);
  }

  public get(id: number): Observable<SmartphoneDetails> {
    return this.http.get<SmartphoneDetails>(`${this.fullUrl}/${id}`);
  }
}
