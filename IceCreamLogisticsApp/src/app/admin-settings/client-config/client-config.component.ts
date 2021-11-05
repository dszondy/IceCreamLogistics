import {Component, OnInit, ViewChild} from '@angular/core';
import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Address, Client, ClientClient} from '../../core/api/api';
import {map, mergeMap, scan, tap, throttleTime} from 'rxjs/operators';

@Component({
  selector: 'app-client-config',
  templateUrl: './client-config.component.html',
  styleUrls: ['./client-config.component.css']
})
export class ClientConfigComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;

  searchText = '';

  batch = 20;
  theEnd = false;
  offset = new BehaviorSubject(0);
  items: Observable<Client[]>;

  selectedItem: Client;
  canAdd = true;
  private

  constructor(private clientClient: ClientClient) {
    this.reset();
  }

  getBatch(offset): Observable<Client[]> {
    return this.clientClient.get(offset, this.batch, this.searchText)
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

  select(item: Client): void {
    this.close().subscribe(() => this.selectedItem = item);
  }

  onSearchTextChange(event: string): void {
    this.reset();
  }

  add(): void {
    this.selectedItem = new Client({name: this.searchText, id: undefined, address: new Address()});
  }

  close(): Observable<Client> {
    if (this.selectedItem
    ) {
      if (this.selectedItem.id) {
        return this.clientClient.put(this.selectedItem).pipe(tap(x => {
          Object.assign(this.selectedItem, x);
          this.reset();
          this.searchText = '';
        }));
      } else {
        return this.clientClient.post(this.selectedItem).pipe(tap(x => {
          Object.assign(this.selectedItem, x);
          this.reset();
          this.searchText = '';
        }));
      }
    }
    return of<Client>(null);
  }

  reset()
    :
    void {
    this.selectedItem = null;
    const batchMap = this.offset.pipe(
      throttleTime(500),
      mergeMap(n => this.getBatch(n)),
      scan((acc, batch) => acc.concat(batch), [])
    );

    this.items = batchMap.pipe();
  }
}
