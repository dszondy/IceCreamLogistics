import { Component, OnInit } from '@angular/core';
import {OrderDetailsItemDto, OrderItemCancellationDto, OrdersClient} from '../../../core/api/api';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-order-item-cancellation-modal',
  templateUrl: './order-item-cancellation-modal.component.html',
  styleUrls: ['./order-item-cancellation-modal.component.css']
})
export class OrderItemCancellationModalComponent implements OnInit {

  constructor(private orderClient: OrdersClient) { }

  orderId: number;
  orderItem: OrderDetailsItemDto;
  amount: number;
  completionSubject = new Subject<any>();
  completionObservable = this.completionSubject.asObservable();

  ngOnInit(): void {
    this.amount = this.orderItem.pendingAmount;
  }

  submit(): void {
    this.orderClient.cancelItems(new OrderItemCancellationDto({
      orderId: this.orderId,
      recipeId: this.orderItem.recipe.id,
      amount: this.amount
    })).subscribe(() => {
      this.completionSubject.next();
    });
  }
}
