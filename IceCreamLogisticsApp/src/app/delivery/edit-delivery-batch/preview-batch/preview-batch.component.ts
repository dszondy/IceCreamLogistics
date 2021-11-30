import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OrderForDeliveryDto} from '../../../core/api/api';

@Component({
  selector: 'app-preview-batch',
  templateUrl: './preview-batch.component.html',
  styleUrls: ['./preview-batch.component.css']
})
export class PreviewBatchComponent implements OnInit {
  @Output()
  orderRemoved = new EventEmitter<OrderForDeliveryDto>();

  @Input()
  orders: OrderForDeliveryDto[];
  constructor() { }

  ngOnInit(): void {
  }

  onOrderChecked($event: boolean, order: OrderForDeliveryDto): void {
      this.orderRemoved.emit(order);
  }
}
