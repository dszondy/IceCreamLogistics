import {Component, OnInit, ViewChild} from '@angular/core';
import {
  InventoryClient,
  InventorySearchParamsDto,
  InventoryStatusDto,
  OrderForDeliveryDto,
  OrderForDeliverySearchParamsDto
} from '../../core/api/api';
import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {map, mergeMap, scan, tap, throttleTime} from 'rxjs/operators';
import {iterator} from 'rxjs/internal-compatibility';
import {InventoryChangeService} from '../inventory-change/inventory-change.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;

  batch = 10;
  theEnd = false;
  offset = new BehaviorSubject(0);
  private itemsDisplayedSubject = new Subject<InventoryStatusDto[]>();
  itemsDisplayedObservable: Observable<InventoryStatusDto[]> = this.itemsDisplayedSubject.asObservable();
  private itemsDisplayed: InventoryStatusDto[];

  constructor(private inventoryClient: InventoryClient, private  inventoryChangeService: InventoryChangeService) {

  }


  ngOnInit(): void {
    this.reset();
  }

  getBatch(offset): Observable<InventoryStatusDto[]> {
    return this.inventoryClient.searchInventory(null, offset, this.batch)
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
  reset(): void {
    this.offset = new BehaviorSubject(0);
    const batchMap = this.offset.pipe(
      throttleTime(500),
      mergeMap(n => this.getBatch(n)),
      scan((acc, batch) => acc.concat(batch), [])
    );

    batchMap
      .pipe(
        tap(items => this.itemsDisplayed = items),
        tap(items => this.itemsDisplayedSubject.next(items))).subscribe();
    this.offset.next(0);
  }

  isDanger(item: InventoryStatusDto): boolean {
    return item.amountRequired > item.amountOnHand && !this.isWarning(item);
  }

  isWarning(item: InventoryStatusDto) : boolean {
    return item.amountRequired <= item.amountOnHand &&
      item.amountRequired + item.warningThreshold > item.amountOnHand;
  }

  add(item: InventoryStatusDto) {
    this.inventoryChangeService.addInventoryDialog(item).subscribe();
  }

  set(item: InventoryStatusDto) {
    this.inventoryChangeService.setInventoryDialog(item).subscribe();
  }
}
