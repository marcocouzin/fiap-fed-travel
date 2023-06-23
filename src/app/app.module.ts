import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchDestiniesComponentComponent } from './components/search/search-destinies-component/search-destinies-component.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterOutlet} from "@angular/router";
import {AppConfigService} from "./services/config/app-config-service.service";
import {HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";

const appInitializerFn = (appConfig: AppConfigService) => {
  return (): Observable<boolean> => {
    return appConfig.loadAppConfig();
  }
};

@NgModule({
  declarations: [
    AppComponent,
    SearchDestiniesComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    HttpClientModule
  ],
  providers: [
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [AppConfigService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

