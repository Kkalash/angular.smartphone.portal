// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { AppConfiguration } from '../app/_shared/configuration/app.configuration';
import { FirebaseConfiguration } from '../app/_shared/models/firebase-configuration.model';

export const environment: AppConfiguration = {
  basePath: '/',
  production: false,
  backendUrl: '',
  firebaseConfig: {
    apiKey: 'AIzaSyDHxAUWI0t_irGcXqQntlKvNLLV1HH9IHs',
    authDomain: 'smartphone-portal-375108.firebaseapp.com',
    projectId: 'smartphone-portal-375108',
    storageBucket: 'smartphone-portal-375108.appspot.com',
    messagingSenderId: '808142688457',
    appId: '1:808142688457:web:c61ef962d7ec360da27d18',
    measurementId: 'G-V30RVQC4Z2',
  } as FirebaseConfiguration,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
