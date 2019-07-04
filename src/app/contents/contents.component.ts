import { Component, OnInit, Input } from "@angular/core";

import { Item } from "../item";
import { ItemService } from "../item.service";

@Component({
  selector: "app-contents",
  templateUrl: "./contents.component.html",
  styleUrls: ["./contents.component.css"]
})
export class ContentsComponent implements OnInit {
  items: Item[];

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.getItems();
  }

  editingItem: Item;
  editItem(editingItem: Item): void {
    this.editingItem = editingItem;
  }

  displayedColumns: string[] = [
    "name",
    "quantity",
    "description",
    "edit",
    "delete"
  ];

  getItems(): void {
    //this.items = this.itemService.getItems();
    this.itemService.getItems().subscribe(items => (this.items = items));
  }
}
