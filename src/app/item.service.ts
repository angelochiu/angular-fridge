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
    this.messageService.add("ItemService: item fetched");
    return of(ITEMS);
  }
}
