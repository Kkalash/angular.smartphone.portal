import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { HTTP_CONFIGURATION } from './_shared/configuration/http.configuration';
import { AppConfigurationService } from './_shared/servicers/app-configuration.service';
import { AuthenticationService } from './_shared/servicers/authentication.service';
import { InMemoryWebApiService } from './_shared/servicers/in-memory-web-api.service';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    AuthModule,
    CoreModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryWebApiService, {
      apiBase: 'api/smartphone-portal/v1',
      dataEncapsulation: false,
      passThruUnknownUrl: true,
    }),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  declarations: [AppComponent],
  providers: [
    {
      provide: HTTP_CONFIGURATION,
      useFactory: (appConfigurationService: AppConfigurationService) =>
        appConfigurationService.getHttpConfiguration(),
      deps: [AppConfigurationService],
    },
    AuthenticationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
