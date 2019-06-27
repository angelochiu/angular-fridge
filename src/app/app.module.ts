import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContentsComponent } from './contents/contents.component';

import { ITEMS } from './mock-items';
import { EditItemDetailComponent } from './edit-item-detail/edit-item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentsComponent,
    EditItemDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
