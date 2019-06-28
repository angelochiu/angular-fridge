import { Component, OnInit } from '@angular/core';

import { Item } from '../item';
import { ITEMS } from '../mock-items';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {

  items = ITEMS;

  constructor() { }

  ngOnInit() {
  }

  editingItem: Item;
  editItem(editingItem: Item): void {
    this.editingItem = editingItem;
  }
}
