import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiPath } from '../enums/api-path.enum';
import { SmartphoneDetails } from '../models/smartphone-details.model';

@Injectable({
  providedIn: 'root',
})
export class SmartphoneDetailsService {
  apiURL = 'http://localhost:4200';

  constructor(private http: HttpClient) {}

  public get(id: number): Observable<SmartphoneDetails> {
    return this.http
      .get<SmartphoneDetails>(
        `${this.apiURL}/${ApiPath.SmartphoneDetails}/${id}`,
      )
      .pipe(map((card) => card));
  }
}
