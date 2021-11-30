import { Component, OnInit } from '@angular/core';
import {DeliveryClient, DeliveryDetailsDto, DeliveryEditDto, OrderForDeliveryDto} from '../../core/api/api';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-create-delivery-batch',
  templateUrl: './edit-delivery-batch.component.html',
  styleUrls: ['./edit-delivery-batch.component.css']
})
export class EditDeliveryBatchComponent implements OnInit {

  delivery: DeliveryDetailsDto;
  selectedOrdersById = new Map<number, OrderForDeliveryDto>() ;

  constructor(activatedRoute: ActivatedRoute, private deliveryClient: DeliveryClient) {
    if (activatedRoute.snapshot.params.id){
      this.deliveryClient.get(activatedRoute.snapshot.params.id).subscribe(delivery => {
        this.delivery = delivery;
        this.selectedOrdersById = new Map<number, OrderForDeliveryDto>();
        this.delivery.orders.forEach(order => {
          this.selectedOrdersById.set(order.id, order);
        });
      });
    }
    else {
      this.delivery = new DeliveryDetailsDto({name: '', deliveryDate: new Date(), orders: [], id: undefined, completed: false});
    }
  }

  ngOnInit(): void {
  }

  save() {
    const deliveryEdit = new DeliveryEditDto({
      completed: false,
      id: this.delivery.id,
      name: this.delivery.name,
      // @ts-ignore
      deliveryDate: new Date(Date.parse(this.delivery.deliveryDate)),
      orderIds: Array.from(this.selectedOrdersById.keys())
    });

    if (this.delivery.id) {
      this.deliveryClient.update(deliveryEdit.id, deliveryEdit).subscribe(() => {
      });
    } else {
      this.deliveryClient.create(deliveryEdit).subscribe(() => {
      });
    }
  }

  orderAdded($event: OrderForDeliveryDto):void {
    this.selectedOrdersById.set($event.id, $event);
  }

  orderRemoved($event: OrderForDeliveryDto):void {
    this.selectedOrdersById.delete($event.id);
  }

  selectedOrders(): OrderForDeliveryDto[] {
    return Array.from(this.selectedOrdersById.values());
  }
}
