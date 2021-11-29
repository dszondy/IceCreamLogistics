import { Injectable } from '@angular/core';
import {InventoryStatusDto, OrderDetailsItemDto} from '../../core/api/api';
import {Observable} from 'rxjs';
import {OrderItemCancellationModalComponent} from '../../shared/services/order-item-cancellation-modal/order-item-cancellation-modal.component';
import {tap} from 'rxjs/operators';
import {BsModalService} from 'ngx-bootstrap/modal';
import {SetInventoryModalComponent} from './set-inventory-modal/set-inventory-modal.component';
import {AddInventoryModalComponent} from './add-inventory-modal/add-inventory-modal.component';

@Injectable({
  providedIn: 'root'
})
export class InventoryChangeService {

  constructor(private modalService: BsModalService) { }
  public addInventoryDialog(item: InventoryStatusDto): Observable<any>{
    const modal = this.modalService.show(AddInventoryModalComponent, {initialState:
        {
          item
        }});
    return modal.content.completionObservable.pipe(tap(x =>   modal.hide()));
  }
  public setInventoryDialog(item: InventoryStatusDto): Observable<any>{
    const modal = this.modalService.show(SetInventoryModalComponent, {initialState:
        {
          item
        }});
    return modal.content.completionObservable.pipe(tap(x =>   modal.hide()));
  }
}
