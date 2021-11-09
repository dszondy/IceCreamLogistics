import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MixingBatchCreateItemDto, MixingBatchCreateMemberDto, OrdersClient} from '../../../core/api/api';
import {map, mergeMap, scan, tap, throttleTime} from 'rxjs/operators';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {
  emptyMixingBatchCreateMemberFromOrderPart,
  fullMixingBatchCreateMemberFromOrderPart,
  MixingBatchOrder,
  MixingBathOrderItem
} from '../models';
import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-select-orders',
  templateUrl: './select-orders.component.html',
  styleUrls: ['./select-orders.component.css']
})
export class SelectOrdersComponent implements OnInit {
  @Input()
  public mixingBatchMembersByOrderId: Map<number, MixingBatchCreateMemberDto>;
  @Input()
  public batchChanged: Observable<void>;


  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;
  batch = 10;
  theEnd = false;
  offset = new BehaviorSubject(0);
  @Output()
  orderSelected = new EventEmitter<MixingBatchOrder>();
  public from: Date;
  public to: Date;
  public clientName: string;
  public recipeName: string;
  private itemsDisplayedSubject = new Subject<MixingBatchOrder[]>();
  itemsDisplayedObservable: Observable<MixingBatchOrder[]> = this.itemsDisplayedSubject.asObservable();
  private itemsDisplayed: MixingBatchOrder[];

  constructor(private ordersClient: OrdersClient) {
  }

  ngOnInit(): void {
    this.reset();
  }

  getBatch(offset): Observable<MixingBatchOrder[]> {
    return this.ordersClient.searchForMixing(this.from, this.to, this.clientName, this.recipeName,
      offset, this.batch)
      .pipe(
        tap(resp => (this.theEnd = !resp.hasMore)),
        map(resp => resp.content.map(order =>
          new MixingBatchOrder(order, this.mixingBatchMembersByOrderId.get(order.order.id)))));
  }

  nextBatch(e, offset): void {
    if (this.theEnd) {
      return;
    }

    const end = this.viewport.getRenderedRange().end;
    const total = this.viewport.getDataLength();
    if (end === total) {
      this.offset.next(offset);
    }
  }

  public filterChange(): void {
    this.reset();
  }

  onItemChecked($event: boolean, item: MixingBathOrderItem, order: MixingBatchOrder): void {
    if ($event) {
      if (order.member) {
        order.member.items = order.member.items.filter(x => x.recipeId !== item.recipeId);

      } else {
        order.member = emptyMixingBatchCreateMemberFromOrderPart(order.orderPart);
      }
      order.member.items.push(new MixingBatchCreateItemDto(
        {
          recipeId: item.recipeId,
          amount: item.incompleteAmount
        }));
    } else {
      order.member.items = order.member.items.filter(x => x.recipeId !== item.recipeId);
    }
    const value = new MixingBatchOrder(order.orderPart, order.member);
    this.itemsDisplayed[this.itemsDisplayed.indexOf(order)] = value;
    this.itemsDisplayedSubject.next([...this.itemsDisplayed]);
    this.orderSelected.emit(value);
  }

  onOrderChecked($event: boolean, order: MixingBatchOrder): void {
    if ($event) {
      order.member = fullMixingBatchCreateMemberFromOrderPart(order.orderPart);
    } else {
      order.member = emptyMixingBatchCreateMemberFromOrderPart(order.orderPart);
    }
    const value = new MixingBatchOrder(order.orderPart, order.member);
    this.itemsDisplayed[this.itemsDisplayed.indexOf(order)] = value;
    this.itemsDisplayedSubject.next([...this.itemsDisplayed]);
    this.orderSelected.emit(value);
  }

  reset(): void {
    this.offset = new BehaviorSubject(0);
    const batchMap = this.offset.pipe(
      throttleTime(500),
      mergeMap(n => this.getBatch(n)),
      scan((acc, batch) => acc.concat(batch), [])
    );

    batchMap
      .pipe(
        tap(orders => this.itemsDisplayed = orders),
        tap(orders => this.itemsDisplayedSubject.next(orders))).subscribe();
    this.offset.next(0);
  }

}
