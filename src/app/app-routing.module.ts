import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ContentsComponent } from "./contents/contents.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EditItemDetailComponent } from "./edit-item-detail/edit-item-detail.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "contents", component: ContentsComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "edit/:id", component: EditItemDetailComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
