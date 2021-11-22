import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {OrderDto, OrdersClient} from '../../core/api/api';
import {map, mergeMap, scan, tap, throttleTime} from 'rxjs/operators';


@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {
  orderStatus = [
    'Törölve',
    'Várakozó',
    'Folyamatban',
    'Előkészítve',
    'Kiszállítva'
  ];


  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;
  batch = 10;
  theEnd = false;
  offset = new BehaviorSubject(0);
  @Output()
  orderSelected = new EventEmitter<OrderDto>();
  public from: Date;
  public to: Date;
  public clientName: string;
  public recipeName: string;
  private itemsDisplayedSubject = new Subject<OrderDto[]>();
  itemsDisplayedObservable: Observable<OrderDto[]> = this.itemsDisplayedSubject.asObservable();
  private itemsDisplayed: OrderDto[];

  constructor(private ordersClient: OrdersClient) {
  }

  ngOnInit(): void {
    this.reset();
  }

  getBatch(offset): Observable<OrderDto[]> {
    return this.ordersClient.search(this.from, this.to, this.clientName, this.recipeName,
      offset, this.batch)
      .pipe(
        tap(resp => (this.theEnd = !resp.hasMore)),
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
