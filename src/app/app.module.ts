import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentsComponent } from './contents/contents.component';

import { ITEMS } from './mock-items';

@NgModule({
  declarations: [
    AppComponent,
    ContentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
