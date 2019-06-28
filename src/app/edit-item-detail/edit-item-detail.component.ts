import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-edit-item-detail',
  templateUrl: './edit-item-detail.component.html',
  styleUrls: ['./edit-item-detail.component.css']
})
export class EditItemDetailComponent implements OnInit {

  @Input() item: Item;

  constructor() { }

  ngOnInit() {
  }

}
