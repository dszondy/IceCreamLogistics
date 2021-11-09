import {Component, OnInit, ViewChild} from '@angular/core';
import {CdkVirtualScrollViewport} from "@angular/cdk/scrolling";
import {BehaviorSubject, Observable} from "rxjs";
import {MixingBatchClient, MixingBatchShallowDto} from "../../core/api/api";
import {map, mergeMap, scan, tap, throttleTime} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-mixing-list',
  templateUrl: './mixing-list.component.html',
  styleUrls: ['./mixing-list.component.css']
})
export class MixingListComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;

  batch = 20;
  theEnd = false;
  offset = new BehaviorSubject(0);
  items: Observable<MixingBatchShallowDto[]>;

  selectedItem: MixingBatchShallowDto;
  canAdd = true;

  constructor(private mixingBatchClient: MixingBatchClient, private router: Router) {
    this.reset();
  }

  getBatch(offset): Observable<MixingBatchShallowDto[]> {
    return this.mixingBatchClient.list(offset, this.batch)
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

  ngOnInit(): void {
  }

  select(item: MixingBatchShallowDto): void {
    this.router.navigate(['/manufacturing', 'batch', item.id]).then();
  }


  onSearchTextChange(event: string): void {
    this.reset();
  }

  private reset(): void {
    this.selectedItem = null;
    const batchMap = this.offset.pipe(
      throttleTime(500),
      mergeMap(n => this.getBatch(n)),
      scan((acc, batch) => acc.concat(batch), [])
    );

    this.items = batchMap.pipe();
  }
}
