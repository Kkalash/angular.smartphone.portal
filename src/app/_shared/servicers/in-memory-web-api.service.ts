import { Injectable } from '@angular/core';
import {
  getStatusText,
  InMemoryDbService,
  RequestInfo,
  ResponseOptions,
  STATUS,
} from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { ApiPath } from '../enums/api-path.enum';
import { WebApiData } from '../web-api-data';

@Injectable({
  providedIn: 'root',
})
export class InMemoryWebApiService implements InMemoryDbService {
  constructor() {}

  createDb(): any {
    return {};
  }

  // HTTP GET interceptor
  get(reqInfo: RequestInfo): Observable<any> {
    const apiPathLevels = this.getApiPathLevels(reqInfo);

    return this.getSmartphons(reqInfo);
    switch (apiPathLevels[0]) {
      case ApiPath.SmartphoneList:
      default:
        return undefined;
    }
  }

  post(reqInfo: RequestInfo): Observable<any> {
    const apiPathLevels = this.getApiPathLevels(reqInfo);

    switch (apiPathLevels[0]) {
      default:
        return undefined;
    }
  }

  put(reqInfo: RequestInfo): Observable<any> {
    const apiPathLevels = this.getApiPathLevels(reqInfo);

    switch (apiPathLevels[0]) {
      default:
        return undefined;
    }
  }

  private finishOptions(
    options: ResponseOptions,
    { headers, url }: RequestInfo,
  ): ResponseOptions {
    options.statusText = getStatusText(options.status);
    options.headers = headers;
    options.url = url;

    return options;
  }

  private getApiPathLevels(reqInfo: RequestInfo): string[] {
    const apiBase = reqInfo.url.match(/\api.*v1\//);
    const apiPath = reqInfo.url.substring(
      reqInfo.url.indexOf(
        (apiBase ?? reqInfo.apiBase) + reqInfo.collectionName,
      ) + (apiBase ? apiBase[0].length : reqInfo.apiBase.length),
    );

    const split = apiPath.split(/\/|\?/);

    const result = [split[0]];

    for (let i = 1; i < split.length; i++) {
      const item = result[i - 1] + '/' + split[i];
      result.push(item);
    }

    return result;
  }

  // GET

  private getSmartphons(reqInfo: RequestInfo): Observable<any> {
    return reqInfo.utils.createResponse$(() => {
      console.log(
        `HTTP GET override: "${ApiPath.SmartphoneList}" (URL: ${reqInfo.url}`,
      );

      const data = WebApiData.smartphons;

      const options: ResponseOptions = {
        body: JSON.parse(JSON.stringify(data)),
        status: STATUS.OK,
      };

      return this.finishOptions(options, reqInfo);
    });
  }

  // POST

  // DELETE
}
