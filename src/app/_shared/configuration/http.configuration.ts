import { InjectionToken } from '@angular/core';

export const HTTP_CONFIGURATION = new InjectionToken<HttpConfiguration>(
  'HTTP_CONFIGURATION',
);

export const appApiBasePath = '/api/smartphone-portal/v1';

export class HttpConfiguration {
  private appApiUrl = '';

  constructor(private backendUrlBaseUrl: string) {
    if (this.backendUrlBaseUrl.endsWith('/')) {
      this.backendUrlBaseUrl = this.backendUrlBaseUrl.slice(0, -1);
    }

    this.appApiUrl = `${this.backendUrlBaseUrl}${appApiBasePath}`;
  }

  public getAppApiUrl(): string {
    return this.appApiUrl;
  }
}
