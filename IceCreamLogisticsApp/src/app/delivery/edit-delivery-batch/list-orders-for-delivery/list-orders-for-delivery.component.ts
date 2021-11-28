import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {
  OrderForDeliveryDto,
  OrderForDeliverySearchParamsDto,
  OrdersClient
} from '../../../core/api/api';
import {map, mergeMap, scan, tap, throttleTime} from 'rxjs/operators';

@Component({
  selector: 'app-list-orders-for-delivery',
  templateUrl: './list-orders-for-delivery.component.html',
  styleUrls: ['./list-orders-for-delivery.component.css']
})
export class ListOrdersForDeliveryComponent implements OnInit {


  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;
  batch = 10;
  theEnd = false;
  offset = new BehaviorSubject(0);

  public from: Date;
  public to: Date;
  private itemsDisplayedSubject = new Subject<OrderForDeliveryDto[]>();
  itemsDisplayedObservable: Observable<OrderForDeliveryDto[]> = this.itemsDisplayedSubject.asObservable();
  private itemsDisplayed: OrderForDeliveryDto[];

  @Input()
  selectedOrdersById: Map<number, OrderForDeliveryDto>;
  @Output()
  orderAdded = new EventEmitter<OrderForDeliveryDto>();
  @Output()
  orderRemoved = new EventEmitter<OrderForDeliveryDto>();

  constructor(private ordersClient: OrdersClient) {
  }

  ngOnInit(): void {
    this.reset();
  }

  getBatch(offset): Observable<OrderForDeliveryDto[]> {
    return this.ordersClient.searchForDelivery(new OrderForDeliverySearchParamsDto(), offset, this.batch)
      .pipe(tap(resp => (this.theEnd = !resp.hasMore)),
        map(resp => resp.content));
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

  onOrderChecked($event: boolean, order: OrderForDeliveryDto): void {
    if ($event) {
      this.orderAdded.emit(order);
    } else {
      this.orderRemoved.emit(order);
    }
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

  isOrderSelected(order: OrderForDeliveryDto): boolean {
    return this.selectedOrdersById.has(order.id);
  }
}
