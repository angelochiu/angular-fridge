import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { ItemService } from "../item.service";

import { Component, OnInit, Input } from "@angular/core";
import { Item } from "../item";

@Component({
  selector: "app-edit-item-detail",
  templateUrl: "./edit-item-detail.component.html",
  styleUrls: ["./edit-item-detail.component.css"]
})
export class EditItemDetailComponent implements OnInit {
  @Input() item: Item;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getItem();
  }

  getItem(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.itemService.getItem(id).subscribe(item => (this.item = item));
  }

  goBack(): void {
    this.location.back();
  }
}
