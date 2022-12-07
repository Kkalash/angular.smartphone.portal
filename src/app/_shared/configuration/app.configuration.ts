import { environment } from '../../../environments/environment';

export class AppConfiguration {
  public basePath: string;
  public production: boolean;
  public backendUrl: string;

  constructor(config: AppConfiguration) {
    Object.assign(this, config);
  }
}

export function getAppConfiguration(): AppConfiguration {
  const config = new AppConfiguration(environment);

  const appComponentConfig = window.document
    .getElementsByTagName('ps-root')[0]
    ?.getAttribute('config');

  if (appComponentConfig) {
    const configObj = JSON.parse(appComponentConfig);

    if (configObj.production) {
      config.production = configObj.production;
    }

    if (configObj.basePath) {
      config.basePath = configObj.basePath;
    }

    if (configObj.backendUrl) {
      config.backendUrl = configObj.backendUrl;
    }
  }

  return config;
}
