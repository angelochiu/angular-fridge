import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ContentsComponent } from "./contents/contents.component";

import { ITEMS } from "./mock-items";
import { EditItemDetailComponent } from "./edit-item-detail/edit-item-detail.component";

import { MatTableModule } from "@angular/material";
import { CdkTableModule } from "@angular/cdk/table";
import { MessagesComponent } from "./messages/messages.component";

@NgModule({
  declarations: [
    AppComponent,
    ContentsComponent,
    EditItemDetailComponent,
    MessagesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
