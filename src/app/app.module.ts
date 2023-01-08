import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ReviewComponent } from './review/review.component';
import { HTTP_CONFIGURATION } from './_shared/configuration/http.configuration';
import { AppConfigurationService } from './_shared/servicers/app-configuration.service';
import { InMemoryWebApiService } from './_shared/servicers/in-memory-web-api.service';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    CoreModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryWebApiService, {
      apiBase: 'api/smartphone-portal/v1',
      dataEncapsulation: false,
      passThruUnknownUrl: true,
    }),
  ],
  declarations: [AppComponent, ReviewComponent],
  providers: [
    {
      provide: HTTP_CONFIGURATION,
      useFactory: (appConfigurationService: AppConfigurationService) =>
        appConfigurationService.getHttpConfiguration(),
      deps: [AppConfigurationService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
