import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchdestiniesComponent } from './components/search/searchdestinies/searchdestinies.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchdestiniesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
