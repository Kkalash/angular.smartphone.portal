import { HttpClient } from '@angular/common/http';
import { HttpConfiguration } from '../configuration/http.configuration';
import { ApiPath } from '../enums/api-path.enum';

export abstract class HttpService {
  protected fullUrl: string;

  constructor(
    protected http: HttpClient,
    protected httpConfiguration: HttpConfiguration,
    apiPath: ApiPath,
  ) {
    this.fullUrl = httpConfiguration.getAppApiUrl() + '/' + apiPath;
  }
}
