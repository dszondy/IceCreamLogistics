import {Component, Input, OnInit} from '@angular/core';
import {MixingItem} from "../models";

@Component({
  selector: 'app-mixing-item',
  templateUrl: './mixing-item.component.html',
  styleUrls: ['./mixing-item.component.css']
})
export class MixingItemComponent implements OnInit {
  measurement = 'adag';
  @Input()
  item: MixingItem;

  constructor() {
  }

  ngOnInit(): void {
  }
}
