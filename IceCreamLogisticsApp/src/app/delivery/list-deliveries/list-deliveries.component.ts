import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {DeliveryShallow, DeliveryClient} from '../../core/api/api';
import {map, mergeMap, scan, tap, throttleTime} from 'rxjs/operators';

@Component({
  selector: 'app-list-deliveries',
  templateUrl: './list-deliveries.component.html',
  styleUrls: ['./list-deliveries.component.css']
})
export class ListDeliveriesComponent implements OnInit {


  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;
  batch = 10;
  theEnd = false;
  offset = new BehaviorSubject(0);
  @Output()
  deliverySelected = new EventEmitter<DeliveryShallow>();
  public from: Date;
  public to: Date;
  public clientName: string;
  public recipeName: string;
  private itemsDisplayedSubject = new Subject<DeliveryShallow[]>();
  itemsDisplayedObservable: Observable<DeliveryShallow[]> = this.itemsDisplayedSubject.asObservable();
  private itemsDisplayed: DeliveryShallow[];

  constructor(private deliveryClient: DeliveryClient) {
  }

  ngOnInit(): void {
    this.reset();
  }

  getBatch(offset): Observable<DeliveryShallow[]> {
    return this.deliveryClient.list(null, offset, this.batch)
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
        tap(deliverys => this.itemsDisplayed = deliverys),
        tap(deliverys => this.itemsDisplayedSubject.next(deliverys))).subscribe();
    this.offset.next(0);
  }
}
