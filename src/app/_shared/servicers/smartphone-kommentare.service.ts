import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import {
  HttpConfiguration,
  HTTP_CONFIGURATION,
} from '../configuration/http.configuration';
import { ApiPath } from '../enums/api-path.enum';
import { KommentarAntwort } from '../models/kommentar-antwort.model';
import { Kommentar } from '../models/kommentar.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class SmartphoneKommentareService extends HttpService {
  constructor(
    http: HttpClient,
    @Inject(HTTP_CONFIGURATION) httpConfiguration: HttpConfiguration,
  ) {
    super(http, httpConfiguration, ApiPath.KommentarAntwort);
  }

  public kommentarAbsenden(kommentar: Kommentar): Observable<Kommentar> {
    return this.http
      .post<Kommentar>(`${this.fullUrl}`, kommentar)
      .pipe(tap((result) => new Kommentar(result)));
  }

  public antworten(antwort: KommentarAntwort): Observable<KommentarAntwort> {
    return this.http
      .post<KommentarAntwort>(`${this.fullUrl}`, antwort)
      .pipe(tap((kommentarAntwort) => new KommentarAntwort(kommentarAntwort)));
  }
}
