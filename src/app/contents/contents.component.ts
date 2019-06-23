import { Component, OnInit } from '@angular/core';

import { Item } from '../item';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {

  content: Item = {
    id: 1,
    name: 'apple',
    quantity: 5,
    description: 'brandless red'
  };

  constructor() { }

  ngOnInit() {
  }

}
