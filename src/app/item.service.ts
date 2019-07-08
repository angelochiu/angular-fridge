import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";

import { Item } from "./item";
import { ITEMS } from "./mock-items";

@Injectable({
  providedIn: "root"
})
export class ItemService {
  constructor(private messageService: MessageService) {}

  getItems(): Observable<Item[]> {
    // TODO: send he message _after_ fetching the items
    this.messageService.add("ItemService: items fetched");
    return of(ITEMS);
  }

  getItem(id: number) {
    this.messageService.add(`ItemService: fetched item id=${id}`);
    return of(ITEMS.find(item => item.id === id));
  }
}
