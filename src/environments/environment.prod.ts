import { AppConfiguration } from '../app/_shared/configuration/app.configuration';
import { FirebaseConfiguration } from '../app/_shared/models/firebase-configuration.model';

export const environment: AppConfiguration = {
  basePath: '/',
  production: true,
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
