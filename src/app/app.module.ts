import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import * as $ from "jquery";
import { LiveSearchComponent } from './live-search/live-search.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteComponent,
    LiveSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
