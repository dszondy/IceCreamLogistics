import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  @Output()
  itemChanged: EventEmitter<MixingItem>;
  constructor() {
  }

  ngOnInit(): void {
  }

  change($event: boolean):void {
    this.itemChanged.emit(this.item);
  }
}
