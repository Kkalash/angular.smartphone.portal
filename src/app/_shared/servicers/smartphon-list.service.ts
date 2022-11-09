import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiPath } from '../enums/api-path.enum';
import { SmartphoneCard } from '../models/smartphone-card.model';

@Injectable({
  providedIn: 'root',
})
export class SmartphoneListService {
  apiURL = 'http://localhost:4200';

  constructor(private http: HttpClient) {}

  public getAll(): Observable<SmartphoneCard[]> {
    return this.http
      .get<SmartphoneCard[]>(`${this.apiURL}/${ApiPath.SmartphoneList}`)
      .pipe(map((card) => card));
  }
}
