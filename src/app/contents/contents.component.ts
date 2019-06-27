import { Component, OnInit } from '@angular/core';

import { Item } from '../item';
import { ITEMS } from '../mock-items';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {

  items = ITEMS;

  // content: Item = {
  //   id: 1,
  //   name: 'apple',
  //   quantity: 5,
  //   description: 'brandless red'
  // };

  constructor() { }

  ngOnInit() {
  }

  editingItem: Content;
  editItem(content: Content): void {
    this.editingItem = content;    
  }

}
