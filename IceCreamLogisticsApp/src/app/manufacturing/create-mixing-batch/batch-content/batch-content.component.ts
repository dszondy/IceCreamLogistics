import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MixingBatchCreateMember} from "../../../core/api/api";
import {emptyMixingBatchCreateMemberFromOrderPart, MixingBatchOrder, MixingBathOrderItem} from "../models";

@Component({
  selector: 'app-batch-content',
  templateUrl: './batch-content.component.html',
  styleUrls: ['./batch-content.component.css']
})
export class BatchContentComponent implements OnInit {
  @Input()
  public mixingBatchMembersByOrderId = new Map<number, MixingBatchCreateMember>();
  @Input()
  public mixingBatchOrders = new Array<MixingBatchOrder>();
  @Output()
  orderSelected = new EventEmitter<MixingBatchOrder>();

  constructor() {
  }

  ngOnInit(): void {
  }

  itemsFiltered(order: MixingBatchOrder): MixingBathOrderItem[] {
    return order.items.filter(x => x.memberAmount > 0);
  }

  onItemChecked($event: boolean, item: MixingBathOrderItem, order: MixingBatchOrder): void {
    order.member.items = order.member.items.filter(x => x.recipeId !== item.recipeId);
    const value = new MixingBatchOrder(order.orderPart, order.member);
    this.orderSelected.emit(value);
  }

  onOrderChecked($event: boolean, order: MixingBatchOrder): void {
    order.member = emptyMixingBatchCreateMemberFromOrderPart(order.orderPart);
    const value = new MixingBatchOrder(order.orderPart, order.member);
    this.orderSelected.emit(value);
  }
}
