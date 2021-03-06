import {Component, OnInit, TemplateRef} from '@angular/core';
import {OrderDetailsDto, OrderDetailsItemDto, OrdersClient} from '../../core/api/api';
import {ActivatedRoute} from '@angular/router';
import {flatMap, tap} from 'rxjs/operators';
import {BsModalService} from 'ngx-bootstrap/modal';
import {CancellationModalService} from '../../shared/services/cancellation-modal.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  order: OrderDetailsDto;
  print: boolean;
  private printModal: any;

  constructor(private ordersClient: OrdersClient, activatedRoute: ActivatedRoute, private modalService: BsModalService,
              private cancellationService: CancellationModalService) {
    activatedRoute.params.pipe(
      flatMap(params => ordersClient.getDetails(params.id)),
      tap(order => this.order = order)
    ).subscribe();
  }

  ngOnInit(): void {
  }

  openPrintModal(printModalTemplate: TemplateRef<any>): void{
    this.printModal = this.modalService.show(printModalTemplate);
    this.printModal.onHide.subscribe(() => this.print = undefined);
  }

  cancelOrder(): void {
    this.ordersClient.cancelOrder(this.order.id)
      .subscribe();
  }

  cancelItem(item: OrderDetailsItemDto): void {
    this.cancellationService.cancelOrderItemDialog(this.order.id, item).subscribe()
  }
}
