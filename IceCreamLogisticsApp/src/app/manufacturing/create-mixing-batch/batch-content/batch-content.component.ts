import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {emptyMixingBatchCreateMemberFromOrderPart, MixingBatchOrder, MixingBathOrderItem} from '../models';
import {MixingBatchCreateMemberDto} from "../../../core/api/api";

@Component({
  selector: 'app-batch-content',
  templateUrl: './batch-content.component.html',
  styleUrls: ['./batch-content.component.css']
})
export class BatchContentComponent implements OnInit {
  @Input()
  public mixingBatchMembersByOrderId = new Map<number, MixingBatchCreateMemberDto>();
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

  change(order: MixingBatchOrder): void {
    order.member.items.forEach(x => x.amount = order.items.find( item => item.recipeId == x.recipeId).memberAmount);
    this.orderSelected.emit(order);
  }
}
