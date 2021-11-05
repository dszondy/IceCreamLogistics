import {Component, OnInit} from '@angular/core';
import {Client, OrderDto, OrderItem, OrdersClient, OrderState} from '../../core/api/api';
import {Router} from "@angular/router";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-create-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
  selectedClient: Client;
  orderItems: OrderItem[];
  date: string

  constructor(private ordersClient: OrdersClient, private router: Router) {
  }

  ngOnInit(): void {
  }

  onOrderItemsChange($event: OrderItem[]): void {
    this.orderItems = $event;
  }

  placeOrder(): void {
    const order = new OrderDto({
      id: undefined,
      orderCreated: new Date(Date.now()),
      client: this.selectedClient,
      requestedDate: new Date(Date.parse(this.date)),
      items: this.orderItems,
      orderState: OrderState.Active
    });
    console.log(order);
    this.ordersClient.placeOrder(order)
      .pipe(tap(() => this.router.navigate(['/orders']).then()))
      .subscribe();

  }
}
