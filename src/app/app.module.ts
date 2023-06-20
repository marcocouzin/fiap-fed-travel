import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchDestiniesComponentComponent } from './components/search/search-destinies-component/search-destinies-component.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    SearchDestiniesComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
