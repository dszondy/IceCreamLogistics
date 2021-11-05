import {Component, OnInit, ViewChild} from '@angular/core';
import {Recipe, RecipeClient} from '../../core/api/api';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {map, mergeMap, scan, tap, throttleTime} from 'rxjs/operators';
import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-recipe-config',
  templateUrl: './recipe-config.component.html',
  styleUrls: ['./recipe-config.component.css']
})
export class RecipeConfigComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;

  searchText = '';

  batch = 20;
  theEnd = false;
  offset = new BehaviorSubject(0);
  items: Observable<Recipe[]>;

  selectedItem: Recipe;
  canAdd = true;

  constructor(private recipeClient: RecipeClient) {
    this.reset();
  }

  getBatch(offset): Observable<Recipe[]> {
    return this.recipeClient.get(offset, this.batch, this.searchText)
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

  select(item: Recipe): void {
    this.close().subscribe(() => this.selectedItem = item);
  }


  onSearchTextChange(event: string): void {
    this.reset();
  }

  add(): void {
    this.selectedItem = new Recipe({name: this.searchText, id: undefined, canBeOrdered: true});
  }

  close(): Observable<Recipe> {
    if (this.selectedItem) {
      if (this.selectedItem.id) {
        return this.recipeClient.put(this.selectedItem).pipe(tap(x => {
          Object.assign(this.selectedItem, x);
          this.reset();
          this.searchText = '';
        }));
      } else {
        return this.recipeClient.post(this.selectedItem).pipe(tap(x => {
          Object.assign(this.selectedItem, x);
          this.reset();
          this.searchText = '';
        }));
      }
    }
    return of<Recipe>(null);
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
