import {Component, OnInit, ViewChild} from '@angular/core';
import {Ingredient, IngredientClient, IngredientCreateDto, IngredientDto} from '../../core/api/api';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {map, mergeMap, scan, tap, throttleTime} from 'rxjs/operators';
import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-ingredient-config',
  templateUrl: './ingredient-config.component.html',
  styleUrls: ['./ingredient-config.component.css']
})
export class IngredientConfigComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;

  searchText = '';

  batch = 20;
  theEnd = false;
  offset = new BehaviorSubject(0);
  items: Observable<IngredientDto[]>;

  selectedItem: IngredientDto;
  canAdd = true;

  constructor(private ingredientClient: IngredientClient) {
    this.reset();
  }

  getBatch(offset): Observable<IngredientDto[]> {
    return this.ingredientClient.get(offset, this.batch, this.searchText)
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

  select(item: Ingredient): void {
    this.close().subscribe(() => this.selectedItem = item);
  }


  onSearchTextChange(event: string): void {
    this.reset();
  }

  add(): void {
    this.selectedItem = new IngredientDto({
      name: this.searchText,
      id: undefined,
      measurementUnit: 'darab',
      amountOnHand: 0,
      quantityPerPackage: 1,
      warningThreshold: 0
    });
  }

  close(): Observable<IngredientCreateDto> {
    if (this.selectedItem) {
      if (this.selectedItem?.id) {
        return this.ingredientClient.put(this.selectedItem).pipe(tap(x => {
          Object.assign(this.selectedItem, x);
          this.reset();
          this.searchText = '';
        }));
      } else {
        return this.ingredientClient.post(this.selectedItem).pipe(tap(x => {
          Object.assign(this.selectedItem, x);
          this.reset();
          this.searchText = '';
        }));
      }
    }
    return of<Ingredient>(null);
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
