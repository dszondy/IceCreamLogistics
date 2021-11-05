import {Component, OnInit} from '@angular/core';
import {MixingBatchClient, MixingBatchCreateDto, MixingBatchCreateMember} from '../../core/api/api';
import {MixingBatchOrder} from './models';

@Component({
  selector: 'app-create-manufacturing-batch',
  templateUrl: './create-mixing-batch.component.html',
  styleUrls: ['./create-mixing-batch.component.css']
})
export class CreateMixingBatchComponent implements OnInit {

  public mixingBatchMembersByOrderId = new Map<number, MixingBatchCreateMember>();
  public mixingBatchOrders = new Array<MixingBatchOrder>();

  constructor(private mixingBatchesClient: MixingBatchClient) {
  }

  ngOnInit(): void {
  }

  orderSelected($event: MixingBatchOrder): void {
    if ($event.member.items.some(x => x.amount > 0)) {
      this.mixingBatchMembersByOrderId.set($event.orderPart.order.id, $event.member);
      this.mixingBatchOrders = [...this.mixingBatchOrders.filter(x => x.orderPart.order.id !== $event.orderPart.order.id),
        $event];
    } else {
      this.mixingBatchMembersByOrderId.delete($event.orderPart.order.id);
      this.mixingBatchOrders = this.mixingBatchOrders.filter(x => x.orderPart.order.id !== $event.orderPart.order.id);
    }
  }

  save(): void {
    this.mixingBatchesClient.create(new MixingBatchCreateDto({
      members: this.mixingBatchOrders.map(x => x.member)
    })).subscribe(x => console.log(x));
  }
}
