import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ContentsComponent } from "./contents/contents.component";

import { EditItemDetailComponent } from "./edit-item-detail/edit-item-detail.component";

import { MatTableModule } from "@angular/material";
import { CdkTableModule } from "@angular/cdk/table";

@NgModule({
  declarations: [AppComponent, ContentsComponent, EditItemDetailComponent],
  imports: [BrowserModule, FormsModule, MatTableModule, CdkTableModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
