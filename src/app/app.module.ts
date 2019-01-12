import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { NgxSemanticMarkupModule } from 'ngx-semantic-markup';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxSemanticMarkupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
