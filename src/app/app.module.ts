import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ContentsComponent } from "./contents/contents.component";

import { EditItemDetailComponent } from "./edit-item-detail/edit-item-detail.component";

import { MatTableModule } from "@angular/material";
import { CdkTableModule } from "@angular/cdk/table";
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, ContentsComponent, EditItemDetailComponent, MessagesComponent],
  imports: [BrowserModule, FormsModule, MatTableModule, CdkTableModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
