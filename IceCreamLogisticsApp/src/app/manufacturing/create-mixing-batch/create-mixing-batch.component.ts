import {Component, OnInit, TemplateRef} from '@angular/core';
import {
  MixingBatchClient,
  MixingBatchCreateDto,
  MixingBatchCreateMemberDto,
  MixingInventoryCheckDto
} from '../../core/api/api';
import {MixingBatchOrder} from './models';
import {Router} from "@angular/router";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-create-manufacturing-batch',
  templateUrl: './create-mixing-batch.component.html',
  styleUrls: ['./create-mixing-batch.component.css']
})
export class CreateMixingBatchComponent implements OnInit {

  public mixingBatchMembersByOrderId = new Map<number, MixingBatchCreateMemberDto>();
  public mixingBatchOrders = new Array<MixingBatchOrder>();
  public name = 'Új keverés';

  ingredientListModal?: BsModalRef;
  ingredientList: MixingInventoryCheckDto[];

  constructor(private mixingBatchesClient: MixingBatchClient,
              private router: Router,
              private modalService: BsModalService) {
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
      name: this.name,
      members: this.mixingBatchOrders.map(x => x.member)
    })).subscribe(x => this.router.navigate(['/manufacturing', 'batch', x.id]));
  }

  openIngredientListModal(template: TemplateRef<any>): void {
    const content = new MixingBatchCreateDto({
      name: this.name,
      members: this.mixingBatchOrders.map(x => x.member)
    });
    this.mixingBatchesClient.inventoryCheck(content)
      .subscribe(x => {
        this.ingredientList = x;
        this.ingredientListModal = this.modalService.show(template);
        this.ingredientListModal.onHide.subscribe(() => this.ingredientList = undefined);
      });
  }
}
