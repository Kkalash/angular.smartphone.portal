import { Injectable } from '@angular/core';
import {
  AppConfiguration,
  getAppConfiguration,
} from '../configuration/app.configuration';
import { HttpConfiguration } from '../configuration/http.configuration';

@Injectable({
  providedIn: 'root',
})
export class AppConfigurationService {
  private appConfiguration: AppConfiguration;

  public getHttpConfiguration(): HttpConfiguration {
    if (!this.appConfiguration) {
      this.appConfiguration = getAppConfiguration();
    }

    return new HttpConfiguration(this.appConfiguration.backendUrl);
  }
}
