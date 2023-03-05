import { environment } from '../../../environments/environment';
import { FirebaseConfiguration } from '../models/firebase-configuration.model';

export class AppConfiguration {
  public basePath: string;
  public production: boolean;
  public backendUrl: string;
  public firebaseConfig: FirebaseConfiguration = new FirebaseConfiguration();

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

    if (configObj.basePath) {
      config.basePath = configObj.basePath;
    }

    if (configObj.production) {
      config.production = configObj.production;
    }

    if (configObj.backendUrl) {
      config.backendUrl = configObj.backendUrl;
    }

    if (configObj.firebaseConfig) {
      if (configObj.firebaseConfig.apiKey) {
        config.firebaseConfig.apiKey = configObj.firebaseConfig.apiKey;
      }

      if (configObj.firebaseConfig.authDomain) {
        config.firebaseConfig.authDomain = configObj.firebaseConfig.authDomain;
      }

      if (configObj.firebaseConfig.projectId) {
        config.firebaseConfig.projectId = configObj.firebaseConfig.projectId;
      }

      if (configObj.firebaseConfig.storageBucket) {
        config.firebaseConfig.storageBucket =
          configObj.firebaseConfig.storageBucket;
      }

      if (configObj.firebaseConfig.messagingSenderId) {
        config.firebaseConfig.messagingSenderId =
          configObj.firebaseConfig.messagingSenderId;
      }

      if (configObj.firebaseConfig.appId) {
        config.firebaseConfig.appId = configObj.firebaseConfig.appId;
      }

      if (configObj.firebaseConfig.measurementId) {
        config.firebaseConfig.measurementId =
          configObj.firebaseConfig.measurementId;
      }
    }
  }

  return config;
}
