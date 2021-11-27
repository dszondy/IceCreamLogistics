import {Component, OnInit, ViewChild} from '@angular/core';
import {
  Recipe,
  RecipeClient,
  RecipeCreateDto,
  RecipeCreateIngredientDto,
  RecipeDetailsDto,
  RecipeDto
} from '../../core/api/api';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {map, mergeMap, scan, switchMap, tap, throttleTime} from 'rxjs/operators';
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

  selectedItemDetails: RecipeDetailsDto;
  selectedItem: RecipeDto;
  canAdd = true;

  constructor(private recipeClient: RecipeClient) {
    this.reset();
  }

  getBatch(offset): Observable<RecipeDto[]> {
    return this.recipeClient.list(offset, this.batch, this.searchText)
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

  select(item: RecipeDto): void {
    this.close().pipe(
      map(() => this.selectedItem = item),
      switchMap(() => this.recipeClient.get(item.id)),
      tap(resp => this.selectedItemDetails = resp),
    ).subscribe();
  }

  onSearchTextChange(event: string): void {
    this.reset();
  }

  add(): void {
    this.selectedItemDetails = new RecipeDetailsDto({
      descriptionForLabels: '',
      pricePerUnit: 0,
      name: this.searchText,
      id: undefined,
      canBeOrdered: true,
      ingredients: []
    });
  }

  close(): Observable<RecipeDetailsDto> {
    if (this.selectedItemDetails) {
      const recipe = new RecipeCreateDto({
        id: this.selectedItemDetails.id,
        name: this.selectedItemDetails.name,
        canBeOrdered: this.selectedItemDetails.canBeOrdered,
        descriptionForLabels: this.selectedItemDetails.descriptionForLabels,
        pricePerUnit: this.selectedItemDetails.pricePerUnit,
        ingredients: [...this.selectedItemDetails.ingredients.map(
          ingredient => new RecipeCreateIngredientDto({
            ingredientId: ingredient.ingredientId,
            amount: ingredient.amount,
          })
        )]
      });

      if (this.selectedItemDetails.id) {
        return this.recipeClient.put(recipe.id, recipe
        ).pipe(tap(x => {
          Object.assign(this.selectedItem, x);
          this.reset();
          this.searchText = '';
        }));
      } else {
        return this.recipeClient.post(recipe)
          .pipe(tap(x => {
            Object.assign(this.selectedItem, x);
            this.reset();
            this.searchText = '';
          }));
      }
    }
    return of<Recipe>(null);
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
}
