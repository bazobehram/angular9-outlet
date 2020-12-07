import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';

import { appRoutes } from './routerConfig';
import { FirstComponent } from './pages/first/first.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
