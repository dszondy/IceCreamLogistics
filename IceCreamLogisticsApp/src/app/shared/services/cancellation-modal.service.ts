import { Injectable } from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {OrderDetailsItemDto, RecipeDto} from '../../core/api/api';
import {Observable} from 'rxjs';
import {initialState} from 'ngx-bootstrap/timepicker/reducer/timepicker.reducer';
import {OrderItemCancellationModalComponent} from './order-item-cancellation-modal/order-item-cancellation-modal.component';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CancellationModalService {

  constructor(private modalService: BsModalService) { }

  public cancelOrderItemDialog(orderId: number, orderItem: OrderDetailsItemDto): Observable<any>{
    const modal = this.modalService.show(OrderItemCancellationModalComponent, {initialState:
        {
          orderItem,
          orderId
    }});
    return modal.content.completionObservable.pipe(tap(x =>   modal.hide()));
  }
}
