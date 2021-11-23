import {Component, OnInit, ViewChild} from '@angular/core';
import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {
  SecurityClient, UserCreateDto,
  UserSecurityInfoDto, UserShallowDto
} from '../../core/api/api';
import {map, mergeMap, scan, switchMap, tap, throttleTime} from 'rxjs/operators';

@Component({
  selector: 'app-user-config',
  templateUrl: './user-config.component.html',
  styleUrls: ['./user-config.component.css']
})
export class UserConfigComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;

  searchText = '';

  batch = 20;
  theEnd = false;
  offset = new BehaviorSubject(0);
  items: Observable<UserShallowDto[]>;

  selectedItemDetails: UserSecurityInfoDto;
  selectedItem: UserShallowDto;
  canAdd = true;

  constructor(private securityClient: SecurityClient) {
    this.reset();
  }

  getBatch(offset): Observable<UserShallowDto[]> {
    return this.securityClient.list(this.searchText, offset, this.batch)
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

  select(item: UserShallowDto): void {
    this.close().pipe(
      map(() => this.selectedItem = item),
      switchMap(() => this.securityClient.getUserInfo(item.id)),
      tap(resp => this.selectedItemDetails = resp),
    ).subscribe();
  }

  onSearchTextChange(event: string): void {
    this.reset();
  }

  add(): void {
    this.selectedItemDetails = new UserSecurityInfoDto({
      name: this.searchText,
      id: undefined,
      roles: [],
      client: null,
      email: '',
    });
  }

  close(): Observable<UserSecurityInfoDto> {
    if (this.selectedItemDetails) {
      const user = new UserCreateDto({
        name: this.selectedItemDetails.name,
        email: this.selectedItemDetails.email,
        roles: this.selectedItemDetails.roles,
        clientId : this.selectedItemDetails.client?.id,
      });

      if (this.selectedItemDetails.id) {
        return this.securityClient.update(user, this.selectedItemDetails.id
        ).pipe(tap(x => {
          Object.assign(this.selectedItem, x);
          this.reset();
          this.searchText = '';
        }));
      } else {
        return this.securityClient.create(user)
          .pipe(tap(x => {
            Object.assign(this.selectedItem, x);
            this.reset();
            this.searchText = '';
          }));
      }
    }
    return of<UserSecurityInfoDto>(null);
  }

  reset(): void {
    this.selectedItem = null;
    this.selectedItemDetails = null;
    const batchMap = this.offset.pipe(
      throttleTime(500),
      mergeMap(n => this.getBatch(n)),
      scan((acc, batch) => acc.concat(batch), [])
    );

    this.items = batchMap.pipe();
  }

  onSetToClient(isClient: boolean) {
    if(!isClient) {
      this.selectedItemDetails.client = null;
    }
  }
}
