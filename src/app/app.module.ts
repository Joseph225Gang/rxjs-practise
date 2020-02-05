import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { LiveSearchComponent } from './live-search/live-search.component';
import { LoginModule } from './login/login.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductModule } from './product/product.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {MessageModule} from './message/message.module';
import {UserComponent} from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteComponent,
    LiveSearchComponent, 
    UserComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,         
    ProductModule,  
    DashboardModule, 
    AppRoutingModule,
    MessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
