import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import {
  HttpConfiguration,
  HTTP_CONFIGURATION,
} from '../configuration/http.configuration';
import { ApiPath } from '../enums/api-path.enum';
import { Kommentar } from '../models/kommentar.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class KommentarService extends HttpService {
  constructor(
    http: HttpClient,
    @Inject(HTTP_CONFIGURATION) httpConfiguration: HttpConfiguration,
  ) {
    super(http, httpConfiguration, ApiPath.Kommentar);
  }

  public kommentarAbsenden(kommentar: Kommentar): Observable<Kommentar> {
    return this.http
      .post<Kommentar>(`${this.fullUrl}`, kommentar)
      .pipe(tap((result) => new Kommentar(result)));
  }
}
